import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransporter } from "@/lib/email";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(150),
  message: z.string().min(10).max(5000),
  company: z.string().max(0).optional(), // honeypot — must stay empty
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    // Honeypot triggered — silently return success to bots
    if (parsed.data.company) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, subject, message } = parsed.data;

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; padding: 24px; background: #0B1826; color: #EDF1F5; border-radius: 6px;">
          <h2 style="color: #C97A3D; margin-top: 0; font-size: 18px;">New Portfolio Enquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border-color: #1C3349; margin: 16px 0;" />
          <p style="line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
