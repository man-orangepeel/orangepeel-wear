"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function ParallaxHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Désactivé sur mobile/tactile : effet peu visible + impact perf
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    if (!mq.matches) return;

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
      style={{ height: "85vh" }}
    >
      {/* Background — s'étend au-delà de la section pour éviter le gap au scroll */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ top: "-25%", bottom: "-25%", left: 0, right: 0 }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2
          className="text-[34px] md:text-[78px] font-bold text-white leading-[1.1] tracking-[-1.5px] md:tracking-[-2.7px] mb-0"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="hidden md:inline" style={{ wordSpacing: "19px" }}>Wear your Values.</span>
          <span className="md:hidden">Wear your Values.</span>
        </h2>
        <h2
          className="text-[34px] md:text-[78px] font-bold text-white leading-[1.1] tracking-[-1.5px] md:tracking-[-2.7px] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="hidden md:inline" style={{ wordSpacing: "19px" }}>Spread your World.</span>
          <span className="md:hidden">Spread your World.</span>
        </h2>
        <p className="max-w-lg text-white/90 text-base mb-3 font-medium" style={{ lineHeight: "28px" }}>
          Orange Peel embodies the spirit of Bitcoin through premium, purpose-driven apparel.
        </p>
        <p className="max-w-lg text-white/95 text-base mb-10" style={{ lineHeight: "28px" }}>
          Provocative, Subtle, Cryptic — your style is yours.
        </p>
        <Link
          href="#home-our-collections"
          className="inline-block bg-white/10 border border-white text-white font-semibold px-8 py-3.5 text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200 rounded-sm backdrop-blur-sm"
        >
          Find the Orange you are
        </Link>
      </div>
    </section>
  );
}
