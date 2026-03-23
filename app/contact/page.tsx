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
        className="-mt-[70px] pb-8 px-6"
        style={{ background: "linear-gradient(160deg, #ffbe2e 0%, #ed760a 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-[60px] font-bold text-[#111518] mb-3 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p className="text-[#111518]/75 text-base mb-12">
            Human answers only, no bots — even orange ones.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="bg-[#0d0d0d] pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {state === "success" ? (
            <div className="flex flex-col gap-4 py-12 text-center">
              <div className="w-12 h-12 mx-auto text-[#ed760a]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Message sent.
              </h2>
              <p className="text-white/60 text-base">
                We&apos;ll get back to you soon. A real human will read this.
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
                <label className="text-white/70 text-sm font-medium">Name or Nickname</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What should we call you?"
                  required
                  className="bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Only used to contact you back"
                  required
                  className="bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-sm font-medium">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-[#111] border border-white/20 text-white/70 px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors rounded-sm"
                >
                  <option value="">Select a subject</option>
                  <option>Order Inquiry</option>
                  <option>Product Information</option>
                  <option>Payment &amp; Privacy</option>
                  <option>Shipping &amp; Delivery</option>
                  <option>Returns &amp; Refunds</option>
                  <option>Feedback &amp; Suggestions</option>
                  <option>Custom Design Request</option>
                  <option>Share Your Story!</option>
                  <option>Partnerships &amp; Collaborations</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-sm font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="We're all ears"
                  rows={6}
                  required
                  className="bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ed760a] transition-colors resize-none rounded-sm"
                />
              </div>

              {/* Error */}
              {state === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or email us directly.
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
