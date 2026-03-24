"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ChevronDown = () => (
  <svg className="w-3 h-3 ml-0.5 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 60);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Active state helpers
  const isHome     = pathname === "/";
  const isSuitUp   = pathname.startsWith("/designs") || pathname.startsWith("/products");
  const isRabbit   = pathname.startsWith("/learn");
  const isAbout    = pathname.startsWith("/about") || pathname === "/contact";

  const base    = "text-[#111518]/65 hover:text-[#ed760a] transition-colors duration-150";
  const active  = "text-[#ed760a]";
  const subBase = "block px-5 py-2.5 text-[#111518]/70 hover:text-[#ed760a] hover:bg-[#f8f6f3] transition-colors text-[12px] tracking-wide uppercase";
  const subActive = "block px-5 py-2.5 text-[#ed760a] bg-[#fff8f2] text-[12px] tracking-wide uppercase font-semibold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/8 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-stretch">

        {/* ── Logo — bottom-aligned, left ── */}
        <Link href="/" className="flex items-end pb-[14px] shrink-0 mr-8">
          <Image
            src="/images/logo-black.png"
            alt="Orange Peel"
            width={130}
            height={44}
            priority
          />
        </Link>

        {/* ── Nav — centred, bottom-aligned ── */}
        <nav className="hidden md:flex items-stretch flex-1 justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.12em]">

          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col justify-end pb-[14px] ${isHome ? active : base}`}
          >
            Home
          </Link>

          {/* Suit Up For Freedom */}
          <div className={`group relative flex flex-col justify-end pb-[14px] ${isSuitUp ? active : base} cursor-default`}>
            <span className="flex items-center select-none">
              Suit Up For Freedom <ChevronDown />
            </span>
            <div className="hidden group-hover:block absolute top-full left-0 pt-0">
              <div className="bg-white border border-black/10 py-1.5 min-w-[210px] shadow-lg rounded-sm">
                <Link href="/designs"  className={pathname === "/designs"  ? subActive : subBase}>Our Designs</Link>
                <Link href="/products" className={pathname.startsWith("/products") ? subActive : subBase}>Our Products</Link>
              </div>
            </div>
          </div>

          {/* Down The Rabbit Hole */}
          <div className={`group relative flex flex-col justify-end pb-[14px] ${isRabbit ? active : base} cursor-default`}>
            <span className="flex items-center select-none">
              Down The Rabbit Hole <ChevronDown />
            </span>
            <div className="hidden group-hover:block absolute top-full left-0 pt-0">
              <div className="bg-white border border-black/10 py-1.5 min-w-[220px] shadow-lg rounded-sm">
                <Link href="/learn/library" className={pathname === "/learn/library" ? subActive : subBase}>A Bitcoin Library</Link>
                <Link href="/learn/courses" className={pathname === "/learn/courses" ? subActive : subBase}>From Newbie to Maxi</Link>
                <Link href="/learn/tribes"  className={pathname === "/learn/tribes"  ? subActive : subBase}>Find Your Tribe</Link>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className={`group relative flex flex-col justify-end pb-[14px] ${isAbout ? active : base} cursor-default`}>
            <span className="flex items-center select-none">
              About Us <ChevronDown />
            </span>
            <div className="hidden group-hover:block absolute top-full left-0 pt-0">
              <div className="bg-white border border-black/10 py-1.5 min-w-[210px] shadow-lg rounded-sm">
                <Link href="/about"              className={pathname === "/about"              ? subActive : subBase}>The Orange We Are</Link>
                <Link href="/about/how-we-work"  className={pathname === "/about/how-we-work"  ? subActive : subBase}>The Way We Peel</Link>
                <Link href="/about/faq"          className={pathname === "/about/faq"          ? subActive : subBase}>Find Your Answers</Link>
                <Link href="/contact"            className={pathname === "/contact"            ? subActive : subBase}>Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* ── Cart — bottom-aligned, right ── */}
        <Link
          href="/cart"
          className={`flex items-end pb-[14px] ml-auto shrink-0 ${pathname === "/cart" ? "text-[#ed760a]" : "text-[#111518]/65 hover:text-[#ed760a]"} transition-colors`}
          aria-label="Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>

      </div>
    </header>
  );
}
