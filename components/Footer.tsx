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
          {/* Telegram — OrangePeel Flow */}
          <a
            href="https://t.me/OrangePeel_Flow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram — OrangePeel Flow"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>

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

          {/* GitHub — TODO: ajouter le bon lien + vérifier le logo sur fond foncé */}
          <a
            href="#"
            aria-label="GitHub"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manuelproquin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
