import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { collection, addDoc, query, where, getDocs, limit, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import crypto from "crypto";

// Use the provided API key or fallback to environment variable
const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBwKdSnOgVPVEzx5V4Rku1DajkQwAfwlR4";

const genAI = new GoogleGenerativeAI(API_KEY);

// System instruction for the AI assistant
const SYSTEM_INSTRUCTION = `You are Aurora Digital's AI assistant. Aurora Digital is a tech company with a team of 6 expert developers who have delivered 50+ successful projects. 

We specialize in:
- Web Development (Next.js, React, Full-Stack)
- Mobile App Development (iOS, Android, React Native)
- AI Agents & Automation (Chatbots, ML, NLP)
- Full-Stack Solutions (MVP Development, End-to-End Solutions)

Our services include:
- Building scalable web applications
- Developing native and cross-platform mobile apps
- Creating AI-powered chatbots and automation systems
- Providing MVP development for startups
- Offering ongoing support and maintenance

Be helpful, professional, and friendly. Answer questions about our services, pricing, portfolio, and how we can help clients. If a user provides their name, email, and project details, acknowledge it and let them know our team will contact them.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Filter and convert messages - ensure first message is from user
    const validMessages = [];
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      const text = msg.parts?.[0]?.text || msg.content || "";
      const role = msg.role === "model" ? "model" : "user";
      
      // Skip if empty text
      if (!text.trim()) continue;
      
      // If this is the first message and it's from model, skip it
      if (validMessages.length === 0 && role === "model") {
        continue;
      }
      
      validMessages.push({
        role: role,
        parts: [{ text }],
      });
    }

    // Ensure we have at least one user message
    if (validMessages.length === 0 || validMessages[validMessages.length - 1].role !== "user") {
      return NextResponse.json(
        { error: "No valid user message found" },
        { status: 400 }
      );
    }

    // Get the last user message
    const lastUserMessage = validMessages[validMessages.length - 1];
    const userMessageText = lastUserMessage.parts[0].text;

    // Build history (all messages except the last one)
    const history = validMessages.slice(0, -1);

    // Start chat with history (if any) or send message directly
    let text: string;
    if (history.length > 0) {
      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessageText);
      const response = await result.response;
      text = response.text();
    } else {
      // No history, just send the message directly
      const result = await model.generateContent(userMessageText);
      const response = await result.response;
      text = response.text();
    }

    // Try to parse as JSON to check if it's a lead submission
    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      // Not JSON, continue with normal response
    }

    // If all required fields exist, save to Firebase
    if (parsed?.name && parsed?.email && parsed?.message) {
      try {
        // Create a deterministic ID based on the lead data
        const leadData = `${parsed.name.toLowerCase().trim()}-${parsed.email.toLowerCase().trim()}-${parsed.message.toLowerCase().trim()}`;
        const leadId = crypto.createHash('md5').update(leadData).digest('hex');
        
        // Use setDoc with the deterministic ID - this will not create duplicates
        await setDoc(doc(db, "leads", leadId), {
          name: parsed.name.trim(),
          email: parsed.email.toLowerCase().trim(),
          message: parsed.message.trim(),
          createdAt: new Date(),
        }, { merge: true });
        
        console.log("Lead processed successfully");

        // Return success message
        return NextResponse.json({
          reply: "Thank you for your interest! Your information has been submitted successfully. Our team will contact you shortly.",
        });
        
      } catch (err) {
        console.error("Failed to save lead:", err);
        // Continue with normal response even if saving fails
      }
    }

    // Return the AI response
    return NextResponse.json({
      reply: text,
    });
    
  } catch (e: any) {
    console.error("Chat API Error:", e);
    return NextResponse.json(
      { 
        error: e.message || "Something went wrong",
        reply: "I'm sorry, I'm having trouble processing your request right now. Please try again in a moment or contact us directly."
      },
      { status: 500 }
    );
  }
}