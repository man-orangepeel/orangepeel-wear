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

const ChevronRight = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
    fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenSection(null);
  }, [pathname]);

  const isHome   = pathname === "/";
  const isSuitUp = pathname.startsWith("/designs") || pathname.startsWith("/products");
  const isRabbit = pathname.startsWith("/learn");
  const isAbout  = pathname.startsWith("/about") || pathname === "/contact";

  const base      = "text-[#111518]/65 hover:text-[#ed760a] transition-colors duration-150";
  const active    = "text-[#ed760a]";
  const subBase   = "block px-5 py-2.5 text-[#111518]/70 hover:text-[#ed760a] hover:bg-[#f8f6f3] transition-colors text-[13px] tracking-wide uppercase";
  const subActive = "block px-5 py-2.5 text-[#ed760a] bg-[#fff8f2] text-[13px] tracking-wide uppercase font-semibold";

  const toggleSection = (s: string) => setOpenSection((prev) => (prev === s ? null : s));

  const SECTIONS = [
    {
      id: "suitup",
      label: "Suit Up For Freedom",
      active: isSuitUp,
      links: [
        { href: "/designs",  label: "Our Designs" },
        { href: "/products", label: "Our Products" },
      ],
    },
    {
      id: "rabbit",
      label: "Down The Rabbit Hole",
      active: isRabbit,
      links: [
        { href: "/learn/library", label: "A Bitcoin Library" },
        { href: "/learn/courses", label: "From Newbie to Maxi" },
        { href: "/learn/tribes",  label: "Find Your Tribe" },
      ],
    },
    {
      id: "about",
      label: "About Us",
      active: isAbout,
      links: [
        { href: "/about",             label: "The Orange We Are" },
        { href: "/about/how-we-work", label: "The Way We Peel" },
        { href: "/about/faq",         label: "Find Your Answers" },
        { href: "/contact",           label: "Contact Us" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/8 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-stretch">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-end pb-[14px] shrink-0 mr-8">
            <Image
              src="/images/logo-fond-blanc.png"
              alt="Orange Peel"
              width={160}
              height={53}
              priority
            />
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-stretch flex-1 justify-center gap-8 text-[13px] font-semibold uppercase tracking-[0.12em]">

            <Link href="/" className={`flex flex-col justify-end pb-[14px] ${isHome ? active : base}`}>
              Home
            </Link>

            {SECTIONS.map((s) => (
              <div key={s.id} className={`group relative flex flex-col justify-end pb-[14px] ${s.active ? active : base} cursor-default`}>
                <span className="flex items-center select-none">
                  {s.label} <ChevronDown />
                </span>
                <div className="hidden group-hover:block absolute top-full left-0 pt-0">
                  <div className="bg-white border border-black/10 py-1.5 min-w-[210px] shadow-lg rounded-sm">
                    {s.links.map((l) => (
                      <Link key={l.href} href={l.href} className={pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href) && l.href.includes("[")) ? subActive : subBase}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* ── Cart + Hamburger ── */}
          <div className="flex items-end pb-[14px] ml-auto gap-5 shrink-0">
            <Link
              href="/cart"
              className={`${pathname === "/cart" ? "text-[#ed760a]" : "text-[#111518]/65 hover:text-[#ed760a]"} transition-colors`}
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden text-[#111518]/65 hover:text-[#111518] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="fixed top-[70px] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto md:hidden">
          <nav className="flex flex-col divide-y divide-black/8">

            {/* Home */}
            <Link
              href="/"
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-widest ${isHome ? "text-[#ed760a]" : "text-[#111518]"}`}
            >
              Home
            </Link>

            {SECTIONS.map((s) => (
              <div key={s.id}>
                <button
                  className={`w-full flex items-center justify-between px-6 py-4 text-sm font-semibold uppercase tracking-widest text-left ${s.active ? "text-[#ed760a]" : "text-[#111518]"}`}
                  onClick={() => toggleSection(s.id)}
                >
                  {s.label}
                  <ChevronRight open={openSection === s.id} />
                </button>
                {openSection === s.id && (
                  <div className="bg-[#f8f6f3] flex flex-col divide-y divide-black/5">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`px-8 py-3.5 text-sm uppercase tracking-widest font-medium ${pathname === l.href ? "text-[#ed760a]" : "text-[#111518]/70"}`}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>
        </div>
      )}
    </>
  );
}
