import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    try{
        await addDoc(collection(db, "leads"), {
            name,
            email,
            message,
            createdAt: new Date()
        });
        return NextResponse.json({ success: true });
    }catch(e: any){
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}