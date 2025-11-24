import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, category, message } = await request.json();
    const userMail = process.env.MAIL_USER;
    const userPass = process.env.MAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userMail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: " soupx",
      to: process.env.MAIL_USER,
      subject: `New Enquiry: ${category} from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <h2 style="color: #d97706;">New Enquiry Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Mobile:</b> ${email}</p>
      <p><b>Enquiry For:</b> ${category}</p>
      <p><b>Enquiry For:</b> ${message}</p>
     
     
      <hr />
      <p style="font-size: 13px; color: #555;">
        This enquiry was sent from SoupX.
      </p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      msg: "Form submitted successfully, we will reach you sortly...",
      flag: 1,
    });
  } catch (error) {
    return NextResponse.json({
      msg: error.message,
      flag: 0,
    });
  }
}
