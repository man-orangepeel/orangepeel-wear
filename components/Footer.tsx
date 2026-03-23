import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 pt-16 pb-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">

        {/* ── What We Stand For ── */}
        <div className="flex flex-col gap-6 w-full">
          <h2
            className="text-[26px] md:text-[32px] font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Stand For
          </h2>
          <div className="flex flex-col gap-4 text-white/60 text-sm leading-relaxed">
            <p>
              <strong className="text-white/90">At Orange Peel, clothing is an expression of a state of mind.</strong>
            </p>
            <p>
              Born from a deep conviction in Bitcoin&apos;s power to uplift and empower, our creations are
              statements of freedom, sovereignty, and integrity.
            </p>
            <p>
              Through every design, we honor this civilizational revolution — a world where money no longer
              belongs to rulers, but to the people.
            </p>
            <p>
              We believe Bitcoiners are not merely preserving wealth — they are building the future.
            </p>
            <p>
              <strong className="text-white/90">Bitcoin frees money. Bitcoin frees minds. We do our part.</strong>
            </p>
          </div>
        </div>

        {/* ── Réseaux Sociaux ── */}
        <div className="flex items-center gap-6">
          {/* X / Twitter */}
          <a
            href="#"
            aria-label="X / Twitter"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.23H2.744l7.737-8.845L2.034 2.25H8.05l4.262 5.636 5.932-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Nostr */}
          <a
            href="#"
            aria-label="Nostr"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* ── Logo + Copyright ── */}
        <div className="flex flex-col items-center gap-1 pt-4 border-t border-white/10 w-full">
          <Image
            src="/images/logo-white.png"
            alt="Orange Peel"
            width={480}
            height={161}
          />
          <p className="text-white/25 text-xs">
            © 2026 Orange Peel — Built on conviction. Paid in sats.
          </p>
        </div>

      </div>
    </footer>
  );
}
