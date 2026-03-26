import { Resend } from "resend";

// Simple in-memory rate limiting (5 requests / minute per IP)
const _rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;

function isRateLimited(req: Request): boolean {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = _rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    _rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    if (isRateLimited(req)) {
      return Response.json({ error: "Too many requests" }, { status: 429 });
    }

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (message.length > 5000) {
      return Response.json({ error: "Message too long (max 5000 characters)" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

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
