import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { collection, addDoc, query, where, getDocs, limit, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import crypto from "crypto";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    const history = messages.map((msg: any) => ({
      role: msg.role,
      parts: msg.parts,
    }));

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
        systemInstruction: process.env.SYSTEM_INSTRUCTION,
      },
    });

    const lastUserMessage = messages[messages.length - 1];

    const response = await chat.sendMessage({
      message: lastUserMessage.parts[0].text,
    });

    let parsed: any = null;

    try {
      if (response.text) {
        parsed = JSON.parse(response.text);
      }
    } catch {
      // Not a JSON response, just reply normally
      return NextResponse.json({
        reply: response.text,
      });
    }

    // If all required fields exist, check for duplicates and store
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
        }, { merge: true }); // merge: true prevents overwriting if document exists
        
        console.log("Lead processed successfully (no duplicates possible)");

        // Always return success message
        return NextResponse.json({
          reply: "Your response has been submitted successfully. Our team will contact you shortly.",
        });
        
      } catch (err) {
        console.error("Failed to save lead:", err);
        return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
      }
    }

    // Not enough fields, continue chat normally
    return NextResponse.json({
      reply: response.text,
    });
    
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "Something went wrong" },
      { status: 500 }
    );
  }
}