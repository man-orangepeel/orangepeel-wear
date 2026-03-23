import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Orange Peel <contact@orangepeel.fr>",
      to: ["orangepeel.btc@gmail.com"],
      subject: `[Orange Peel Contact] ${subject || "New message"}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
