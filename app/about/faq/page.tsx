"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS: { category: string; items: { q: string; a: React.ReactNode }[] }[] = [
  {
    category: "Product Information",
    items: [
      {
        q: "How long will my T-shirt last?",
        a: "For quality and durability, I specifically chose to work with a trusted French workshop, known for its craftsmanship and over 25 years of experience in premium garment production. No mass production, no shortcuts. The fabrics are thick, durable, and made to last. Whether embroidered or printed, each piece is designed to be worn, washed, and worn again.",
      },
      {
        q: "How should I care for my items?",
        a: (
          <>
            <p className="mb-4">With a little extra care, your unique pieces will last even longer. Here&apos;s the best way to take care of them:</p>
            <ul className="flex flex-col gap-2 mb-4">
              <li className="flex gap-2">
                <span className="text-[#ed760a] shrink-0 mt-[3px]">—</span>
                <span>Machine wash on the lowest possible temperature, inside out, on a gentle cycle.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ed760a] shrink-0 mt-[3px]">—</span>
                <span>For drying, hang your garments or use low heat to preserve their shape and prevent shrinking.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ed760a] shrink-0 mt-[3px]">—</span>
                <span>When ironing, avoid pressing directly on the print. Use a cloth to protect the design, or turn the garment inside out and iron on the reverse side.</span>
              </li>
            </ul>
            <p>Treat your pieces with care, and they&apos;ll stay as vibrant and durable as your values.</p>
          </>
        ),
      },
      {
        q: "Are your products made sustainably?",
        a: "Bitcoin encourages thoughtful consumption — saving and investing in quality rather than fast, mass consumption. This philosophy aligns with my commitment to conscious production, creating long-lasting products made from organic and recycled materials to respect both you and the planet.",
      },
    ],
  },
  {
    category: "Payment & Privacy",
    items: [
      {
        q: "Do you accept Bitcoin?",
        a: (
          <>
            <p className="mb-4">Yes! I accept Bitcoin and actively encourage its use. You&apos;ll find the payment option directly at checkout. I support both the Bitcoin network and the Lightning Network for fast, low-fee transactions.</p>
            <p>
              New to Bitcoin? Using it builds its value — and that means acting in your own best interest. Explore the{" "}
              <Link href="/learn/library" className="text-[#ed760a] hover:underline">Bitcoin Library</Link>
              {" "}and{" "}
              <Link href="/learn/courses" className="text-[#ed760a] hover:underline">From Newbie to Maxi</Link>
              {" "}to guide you on how to buy, secure, and spend Bitcoin with confidence.
            </p>
          </>
        ),
      },
      {
        q: "Do you accept cryptocurrencies?",
        a: "No, I only accept Bitcoin. I'm a Bitcoin-focused brand, and my mission is to see Bitcoin adopted globally as a true form of money. I make a clear distinction between Bitcoin, which is a decentralized, monetary, political, and societal movement, and other cryptocurrencies, which are typically issued by companies and function more like stocks.",
      },
      {
        q: "Do you collect my personal data?",
        a: (
          <>
            <p className="mb-4">Only the bare minimum — and only for essential reasons like generating an invoice or sending tracking info. I don&apos;t use your data for marketing, I don&apos;t sell it, and I don&apos;t track you.</p>
            <p className="mb-4">Once your data is no longer needed, it&apos;s automatically deleted.</p>
            <p>Privacy isn&apos;t a feature here — it&apos;s the default.</p>
          </>
        ),
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "Where do you ship from — and do you ship to my country?",
        a: (
          <>
            <p className="mb-4">You&apos;re witnessing the birth of Orange Peel: no shipping just yet. For now, pieces can be picked up at Bitcoin events in France.</p>
            <p>Once shipping opens, I&apos;ll deliver across France and internationally, directly from the French workshop.</p>
          </>
        ),
      },
      {
        q: "What are my shipping costs?",
        a: "Shipping costs depend on the weight of your items, the service you select, and your shipping location. You can always view the shipping costs before finalizing your order. Customs fees or import taxes may apply depending on your location — these fees are the responsibility of the customer.",
      },
      {
        q: "How long will it take to receive my order?",
        a: "Each product is made-to-order, crafted specifically for you. I typically ship orders within 3 to 7 business days. After that, delivery time depends on your location: 24–48 hours within France, and 3 to 5 business days for Europe and international shipping. Thank you for your patience!",
      },
      {
        q: "Can I track my order?",
        a: "Yes, once your order has been shipped, you will receive an email with a tracking number to follow the delivery status.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        q: "What is your return and refund policy?",
        a: (
          <>
            <p className="mb-4">Each item is specially made just for you, crafted on demand and tailored to your choice — custom or personalized products cannot be returned or exchanged.</p>
            <p className="mb-4">However, if you notice any printing defects, damage, or issues with your item, please reach out within 30 days of receiving your order. I&apos;ll work with you to find a solution and make things right.</p>
            <p>Please note that return shipping costs are non-refundable.</p>
          </>
        ),
      },
    ],
  },
  {
    category: "Miscellaneous",
    items: [
      {
        q: "Do you have retail stores or take orders by phone?",
        a: "I sell exclusively online for the moment — all orders must be placed through the site.",
      },
      {
        q: "Do you have a newsletter?",
        a: (
          <>
            <p className="mb-4">
              I run{" "}
              <a href="https://t.me/OrangePeel_Flow" target="_blank" rel="noopener noreferrer" className="text-[#ed760a] hover:underline font-semibold">OrangePeel Flow</a>
              {" "}— a free Telegram channel dedicated to Bitcoin. Every day: a sharp meme, an incisive take on adoption news, a look at the fundamentals that matter. A weekly community poll and a recap to close the loop. No altcoins, no speculation, no ads — pure signal, for beginners and seasoned Bitcoiners alike.
            </p>
            <p className="mb-4 text-sm italic">In French for now — yes, I&apos;m French.</p>
            <p>As for email newsletters: I don&apos;t want to push sales or harvest data. No spam, no pressure.</p>
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── Header ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            About Us
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Your Answer
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            No spin. No noise. Just the facts.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 px-6 pb-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {FAQS.map((section) => (
            <div key={section.category}>
              <h2
                className="text-[28px] font-bold text-[#111518] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.category}
              </h2>
              <div className="flex flex-col divide-y divide-black/10">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key}>
                      <button
                        className="w-full flex items-center justify-between py-5 text-left gap-4"
                        onClick={() => toggle(key)}
                      >
                        <span className="text-[#111518] font-semibold text-base">{item.q}</span>
                        <span
                          className={`shrink-0 w-5 h-5 text-[#ed760a] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="text-[#6b7280] text-base leading-relaxed pb-5">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f8f6f3] py-16 px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="text-[36px] font-bold text-[#111518]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Still have questions?
          </h2>
          <p className="text-[#6b7280] text-base">
            Human answers only. No bots, no templates.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ed760a] text-black font-bold px-10 py-3 text-sm hover:bg-[#efa813] transition-colors duration-200 rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
