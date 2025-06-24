import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

    // If all fields exist, store them silently
    if (parsed?.name && parsed?.email && parsed?.message) {
      try {
        await addDoc(collection(db, "leads"), {
          name: parsed.name,
          email: parsed.email,
          message: parsed.message,
          createdAt: new Date(),
        });
        
        // Do not send JSON back — only success message
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
