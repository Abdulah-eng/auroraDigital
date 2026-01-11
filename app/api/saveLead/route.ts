import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Hardcoded SMTP configuration
const SMTP_CONFIG = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "mabdulaharshad@gmail.com",
        pass: "lekp inka okfv flcb"
    }
};

const ADMIN_EMAIL = "mabdulaharshad@gmail.com";

// Create reusable transporter
const transporter = nodemailer.createTransport(SMTP_CONFIG);

async function sendEmailNotification(name: string, email: string, message: string) {
    try {
        await transporter.sendMail({
            from: `"Aurora Digital" <${SMTP_CONFIG.auth.user}>`,
            to: ADMIN_EMAIL,
            subject: `New Project Inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="color: #1C437E;">New Project Inquiry</h2>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background-color: white; padding: 15px; border-radius: 4px;">
                            ${message.replace(/\n/g, '<br>')}
                        </p>
                    </div>
                </div>
            `,
        });
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Try to save to Firebase (optional, won't fail if Firebase is not configured)
        try {
            const { db } = await import("@/lib/firebase");
            if (db) {
                const { collection, addDoc } = await import("firebase/firestore");
                await addDoc(collection(db, "leads"), {
                    name,
                    email,
                    message,
                    createdAt: new Date()
                });
            }
        } catch (firebaseError) {
            console.warn("Firebase save failed (continuing with email):", firebaseError);
        }

        // Send email notification
        const emailSent = await sendEmailNotification(name, email, message);

        return NextResponse.json({
            success: true,
            emailSent: emailSent
        });
    } catch (error: any) {
        console.error("Error in saveLead:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
