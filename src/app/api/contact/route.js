import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, suburb, desc } = await req.json();

    // ✅ Create transporter using your Gmail credentials from .env.local
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    
    const adminMail = {
      from: `"Website Inquiry" <${process.env.CONTACT_EMAIL}>`,
      to: "kumarmanish.amr@gmail.com", // 👈 your inbox
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Quote Request Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Description:</strong> ${desc}</p>
      `,
    };

    await transporter.sendMail(adminMail);

    // Send confirmation mail to the user
    const userMail = {
      from: `"KHM Logistics" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting KHM Logistics",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0078d7;">Hello ${name || "there"},</h2>
          <p>Thank you for reaching out to <strong>KHM Logistics</strong>.</p>
          <p>We’ve received your inquiry and one of our team members will get back to you soon.</p>
          <br/>
          <p style="margin: 0;">Warm regards,</p>
          <p style="font-weight: bold; margin: 0;">KHM Logistics Team</p>
          <p style="font-size: 0.9em; color: #888;">This is an automated confirmation email — please do not reply.</p>
        </div>
      `,
    };

    await transporter.sendMail(userMail);

    // ✅ Response
    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
