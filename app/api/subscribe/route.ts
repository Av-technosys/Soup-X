import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    const mailTo = process.env.MAIL_TO ?? mailUser;

    if (!mailUser || !mailPass || !mailTo) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    await transporter.sendMail({
      from: mailUser,
      to: mailTo,
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
