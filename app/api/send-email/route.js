// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, category, message } = body;

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or "hotmail", "outlook", "yahoo"
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: `"SoupX Website" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_TO,
//       subject: `New Contact Form Submission - ${name}`,
//       html: `
//         <h2>New Contact Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Category:</strong> ${category}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log("Email Error:", error);
//     return new Response(JSON.stringify({ success: false, error }), {
//       status: 500,
//     });
//   }
// }

// import nodemailer from "nodemailer";

// export async function POST(req) {
//   // console.log("mailuser:", process.env.MAIL_USER);
//   // console.log("mailpass:", process.env.MAIL_PASS);
//   console;
//   try {
//     const body = await req.json();
//     const { name, email, category, message } = body;
//     console.log("Contact Form Data:", body);
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "kumarlavesh2001@gmail.com",
//         pass: "wunieazvnzeoxfe",
//       },
//     });

//     await transporter.sendMail({
//       from: "kumarlavesh2001@gmail.com",
//       to: "ravindrasinghrss2004@gmail.com",
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Category:</b> ${category}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email Error:", error);
//     return new Response(JSON.stringify({ success: false }), { status: 500 });
//   }
// }

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
        This enquiry was sent from the Monu Goras Bhandar website.
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
