import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    // Convert messages to chat history format
    const history = messages.map((msg: any) => ({
      role: msg.role, // Convert "bot" to "model"
      parts: msg.parts,
    }));

    // Create chat session with history
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history: history,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
        systemInstruction: process.env.SYSTEM_INSTRUCTION,
      }
    });

    // Get the last user message (assuming last message is always from user)
    const lastUserMessage = messages[messages.length - 1];
    
    // Send the message
    const response = await chat.sendMessage({
      message: lastUserMessage.parts[0].text,
    });

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