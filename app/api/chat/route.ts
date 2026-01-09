import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBwKdSnOgVPVEzx5V4Rku1DajkQwAfwlR4";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_INSTRUCTION = `You are Aurora Digital's AI assistant. Aurora Digital is a tech company with a team of 6 expert developers who have delivered 50+ successful projects. 

We specialize in:
- Web Development (Next.js, React, Full-Stack)
- Mobile App Development (iOS, Android, React Native)
- AI Agents & Automation (Chatbots, ML, NLP)
- Full-Stack Solutions (MVP Development, End-to-End Solutions)

Be helpful, professional, and friendly. Answer questions about our services, pricing, portfolio, and how we can help clients.`;

// Simple fallback responses based on keywords
function getFallbackResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
    return "We offer comprehensive web development, mobile app development, AI agents & automation, and full-stack solutions. Our team of 6 expert developers has delivered 50+ successful projects. Would you like to know more about any specific service?";
  }
  
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return "Our pricing depends on your project requirements. We offer competitive rates for web development, mobile apps, and AI solutions. For a personalized quote, please share your project details or contact us directly at shafiqueabdurrehman@gmail.com";
  }
  
  if (lowerMessage.includes("portfolio") || lowerMessage.includes("project") || lowerMessage.includes("work")) {
    return "We've completed 50+ successful projects including e-commerce platforms, healthcare apps, education platforms, and business solutions. You can view our featured projects on our website or visit our projects page to see all our work!";
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    return "You can reach us at:\n📧 Email: shafiqueabdurrehman@gmail.com\n📞 Phone: +92 319-2165662\n📍 Location: NUST H-12, Islamabad, Pakistan\n\nWe'd love to discuss your project!";
  }
  
  return "Thank you for your interest in Aurora Digital! We're a team of 6 expert developers specializing in web development, mobile apps, and AI solutions. For detailed information, please contact us at shafiqueabdurrehman@gmail.com or call +92 319-2165662. We're here to help bring your project to life!";
}

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

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userMessageText = lastMessage.parts?.[0]?.text || lastMessage.content || "";

    if (!userMessageText.trim()) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }

    // Try to use Gemini AI, with fallback to simple responses
    try {
      // Try different model names
      const modelNames = [
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro-latest", 
        "gemini-1.5-flash",
        "gemini-1.5-pro"
      ];
      
      let model;
      let lastError;
      
      for (const modelName of modelNames) {
        try {
          model = genAI.getGenerativeModel({ 
            model: modelName,
            systemInstruction: SYSTEM_INSTRUCTION,
          });
          
          // Try to generate content
          const result = await model.generateContent(userMessageText);
          const response = await result.response;
          const text = response.text();
          
          return NextResponse.json({ reply: text });
        } catch (modelError: any) {
          lastError = modelError;
          console.log(`Model ${modelName} failed:`, modelError.message);
          continue;
        }
      }
      
      // If all models failed, use fallback
      console.warn("All Gemini models failed, using fallback response. Last error:", lastError?.message);
      const fallbackResponse = getFallbackResponse(userMessageText);
      return NextResponse.json({ reply: fallbackResponse });
      
    } catch (aiError: any) {
      console.error("AI service error:", aiError);
      // Use intelligent fallback
      const fallbackResponse = getFallbackResponse(userMessageText);
      return NextResponse.json({ reply: fallbackResponse });
    }
    
  } catch (e: any) {
    console.error("Chat API Error:", e);
    return NextResponse.json(
      { 
        error: e.message || "Something went wrong",
        reply: "I'm sorry, I'm having trouble processing your request right now. Please contact us directly at shafiqueabdurrehman@gmail.com or call +92 319-2165662 for immediate assistance."
      },
      { status: 500 }
    );
  }
}
