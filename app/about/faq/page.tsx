"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    category: "Products",
    items: [
      {
        q: "What materials do you use?",
        a: "All our garments are made from GOTS-certified organic cotton and meet OEKO-TEX® standards. No synthetic blends, no shortcuts. We source ethically and produce in small batches with vetted partners.",
      },
      {
        q: "What sizes are available?",
        a: "We offer XS through XXL for most items. Size guides are available on each product page. When in doubt, go one size up — our cuts are slightly slim.",
      },
      {
        q: "Do you offer women's cuts?",
        a: "Yes. Several designs are available in women's cuts. Look for the \"Women\" label when filtering products. We're expanding this range with every drop.",
      },
      {
        q: "Can I request a custom design?",
        a: "We occasionally take custom requests for bulk orders (10+ pieces). Reach out via the contact form and we'll let you know what's possible.",
      },
    ],
  },
  {
    category: "Orders & Payment",
    items: [
      {
        q: "Do you accept Bitcoin?",
        a: "Yes — exclusively. We accept on-chain and Lightning Network payments via BTCPay Server. No credit cards, no PayPal, no fiat. This is intentional.",
      },
      {
        q: "Where do you ship?",
        a: "Worldwide. Shipping costs and delivery times vary by destination. You'll see the estimate at checkout.",
      },
      {
        q: "How long does shipping take?",
        a: "Standard EU delivery: 5–10 business days. International: 10–20 business days. Express options may be available depending on your location.",
      },
      {
        q: "Can I return or exchange an item?",
        a: "We accept returns within 14 days if the item is unused and in original condition. Contact us first via the contact form. Exchanges are subject to stock availability.",
      },
    ],
  },
  {
    category: "Privacy",
    items: [
      {
        q: "What data do you collect?",
        a: "Only what's strictly necessary to fulfil your order: shipping address and email. We don't track you, sell your data, or run analytics beyond basic server logs.",
      },
      {
        q: "Is my shipping address stored?",
        a: "It's stored only for the duration required to process and ship your order, then deleted. We do not maintain customer profiles.",
      },
      {
        q: "Can I order without an email?",
        a: "We require an email for order confirmation and support. You can use a privacy-focused alias (SimpleLogin, ProtonMail) — we don't care, as long as we can reach you if there's an issue.",
      },
    ],
  },
  {
    category: "About Orange Peel",
    items: [
      {
        q: "Why Bitcoin only?",
        a: "Because Bitcoin is the only monetary network built on proof-of-work, fixed supply, and genuine decentralization. Everything else is noise. We don't print altcoins on cotton.",
      },
      {
        q: "What are the Warriors, Wizards, and Cyphers collections?",
        a: "Three ways to wear conviction. Warriors declare. Wizards whisper. Cyphers encode. Each collection reflects a different Bitcoin archetype — pick the one that fits your personality.",
      },
      {
        q: "Is this a real shop?",
        a: "Yes, though commerce features are currently in development. The designs, products, and brand are real. Transactions will go live with full BTCPay Server integration.",
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
            Find Your Answers
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Honest answers to the questions we get asked most.
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
                        <p className="text-[#6b7280] text-base leading-relaxed pb-5">
                          {item.a}
                        </p>
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
