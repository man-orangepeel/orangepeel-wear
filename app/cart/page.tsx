import Link from "next/link";

export default function CartPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-8 px-6"
        style={{ background: "linear-gradient(160deg, #ffbe2e 0%, #ed760a 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-black/50 text-sm tracking-widest uppercase mb-4 font-medium">
            Your Cart
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-[#111518] leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We&apos;ll Be Back
          </h1>
          <p className="text-[#111518]/75 text-lg leading-relaxed max-w-2xl">
            Our store is temporarily paused. We&apos;ve been active before and we&apos;re coming back —
            with full Bitcoin payments via BTCPay Server, onchain &amp; Lightning.
          </p>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="bg-white py-24 px-6 pb-32">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Cart icon */}
          <div className="w-16 h-16 text-[#ed760a]">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className="text-[28px] font-bold text-[#111518] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Commerce Temporarily Paused
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed">
              We were active, and we&apos;re reopening soon. Want to be notified when the store is back?
              Drop us a message and we&apos;ll reach out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#ed760a] text-black font-bold px-10 py-4 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
            >
              Get Notified
            </Link>
            <Link
              href="/products"
              className="inline-block border border-[#111518] text-[#111518] font-bold px-10 py-4 text-sm hover:bg-[#111518] hover:text-white transition-colors rounded-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
