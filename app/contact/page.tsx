"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Let&apos;s Talk
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Human answers only, no bots — even orange ones.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="bg-white py-16 px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          {state === "success" ? (
            <div className="flex flex-col gap-4 py-12 text-center">
              <div className="w-12 h-12 mx-auto text-[#ed760a]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-[#111518] text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Message sent.
              </h2>
              <p className="text-[#6b7280] text-base">
                I&apos;ll get back to you soon — a real human will read this.
              </p>
              <button
                onClick={() => setState("idle")}
                className="text-[#ed760a] text-sm hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111518] text-sm font-semibold">Name or Nickname</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  required
                  className="bg-white border border-black/15 text-[#111518] placeholder-[#9ca3af] px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111518] text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Only used to contact you back"
                  required
                  className="bg-white border border-black/15 text-[#111518] placeholder-[#9ca3af] px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111518] text-sm font-semibold">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-white border border-black/15 text-[#6b7280] px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                >
                  <option value="">Select a subject</option>
                  <option>Order &amp; Shipping</option>
                  <option>Returns &amp; Refunds</option>
                  <option>Payment &amp; Privacy</option>
                  <option>Custom Design Request</option>
                  <option>Notify Me at Relaunch</option>
                  <option>Partnerships &amp; Collaborations</option>
                  <option>Feedback &amp; Suggestions</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111518] text-sm font-semibold">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I'm all ears"
                  rows={6}
                  required
                  className="bg-white border border-black/15 text-[#111518] placeholder-[#9ca3af] px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors resize-none rounded-sm"
                />
              </div>

              {/* Error */}
              {state === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="bg-[#ed760a] text-black font-bold px-10 py-3 text-sm hover:bg-[#efa813] transition-colors duration-200 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "sending" ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
