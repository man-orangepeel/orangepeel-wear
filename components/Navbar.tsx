"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 60);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-white/10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center gap-10">
        {/* Logo — calé à gauche */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="Orange Peel"
            width={140}
            height={47}
            priority
          />
        </Link>

        {/* Nav — prend l'espace disponible */}
        <nav className="hidden md:flex items-stretch flex-1 gap-10 text-[15px] font-medium h-full">
          <Link
            href="/"
            className="flex items-center text-white/70 hover:text-[#ed760a] transition-colors"
          >
            Home
          </Link>

          {/* Suit Up For Freedom */}
          <div className="group relative flex items-center">
            <span className="cursor-default text-white/70 group-hover:text-[#ed760a] transition-colors select-none">
              Suit Up For Freedom
            </span>
            <div className="hidden group-hover:block absolute top-full left-0">
              <div className="bg-[#0d0d0d] border border-white/10 py-2 min-w-[200px] shadow-xl rounded-sm">
                <Link href="/designs" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  Our Designs
                </Link>
                <Link href="/products" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  Our Products
                </Link>
              </div>
            </div>
          </div>

          {/* Down The Rabbit Hole */}
          <div className="group relative flex items-center">
            <span className="cursor-default text-white/70 group-hover:text-[#ed760a] transition-colors select-none">
              Down The Rabbit Hole
            </span>
            <div className="hidden group-hover:block absolute top-full left-0">
              <div className="bg-[#0d0d0d] border border-white/10 py-2 min-w-[220px] shadow-xl rounded-sm">
                <Link href="/learn/library" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  A Bitcoin Library
                </Link>
                <Link href="/learn/courses" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  From Newbie to Maxi
                </Link>
                <Link href="/learn/tribes" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  Find Your Tribe
                </Link>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="group relative flex items-center">
            <span className="cursor-default text-white/70 group-hover:text-[#ed760a] transition-colors select-none">
              About Us
            </span>
            <div className="hidden group-hover:block absolute top-full left-0">
              <div className="bg-[#0d0d0d] border border-white/10 py-2 min-w-[200px] shadow-xl rounded-sm">
                <Link href="/about" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  The Orange We Are
                </Link>
                <Link href="/about/how-we-work" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  The Way We Peel
                </Link>
                <Link href="/about/faq" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  Find Your Answers
                </Link>
                <Link href="/contact" className="block px-5 py-3 text-white/70 hover:text-[#ed760a] hover:bg-white/5 transition-colors text-[14px]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Cart — calé à droite */}
        <Link href="/cart" className="ml-auto text-white/70 hover:text-[#ed760a] transition-colors shrink-0" aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
