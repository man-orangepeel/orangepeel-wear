"use client";

import { useState } from "react";

type MapView = "communities" | "merchants";

const MAP_URLS: Record<MapView, string> = {
  communities: "https://btcmap.org/communities/map",
  merchants:   "https://btcmap.org/map",
};

export default function TribesPage() {
  const [view, setView] = useState<MapView>("communities");

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Down The Rabbit Hole
          </p>
          <h1
            className="text-[44px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Your Tribe
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Bitcoin communities and merchants worldwide. Real people, real meetings.
            No permission required.
          </p>
        </div>
      </section>

      {/* ── Info ── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          <div className="flex flex-col items-center gap-5 py-8 px-8">
            <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-7 h-7 text-[#ed760a]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-base mb-1">Local Meetups</p>
              <p className="text-white/50 text-sm">Find Bitcoin meetups near you. Share knowledge, build relationships.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 py-8 px-8">
            <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-7 h-7 text-[#ed760a]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-base mb-1">Bitcoin Merchants</p>
              <p className="text-white/50 text-sm">Spend sats, strengthen the circular economy.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 py-8 px-8">
            <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-7 h-7 text-[#ed760a]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-base mb-1">No Permission</p>
              <p className="text-white/50 text-sm">Open source, community-run. Bitcoin doesn&apos;t ask for approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Toggle tabs ── */}
      <section className="bg-white border-b border-black/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setView("communities")}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-sm transition-colors ${
              view === "communities"
                ? "bg-[#ed760a] text-black"
                : "bg-[#f5f5f5] text-[#111518] hover:bg-[#eee]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            Bitcoin Communities
          </button>
          <button
            onClick={() => setView("merchants")}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-sm transition-colors ${
              view === "merchants"
                ? "bg-[#ed760a] text-black"
                : "bg-[#f5f5f5] text-[#111518] hover:bg-[#eee]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
            Merchant Map
          </button>
          <span className="ml-auto text-xs text-[#6b7280] hidden md:block">
            Data by{" "}
            <a href="https://btcmap.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ed760a] transition-colors">BTCMap</a>
            {" "}— open source, community-run
          </span>
        </div>
      </section>

      {/* ── Map ── */}
      <section>
        <iframe
          key={view}
          src={MAP_URLS[view]}
          className="w-full border-0 block"
          style={{ height: "65vh", minHeight: "460px" }}
          title={view === "communities" ? "Bitcoin Communities — BTCMap" : "Bitcoin Merchants — BTCMap"}
          allowFullScreen
        />
      </section>

      {/* ── Meetup Bitcoin Nantes ── */}
      <section className="bg-[#111518] py-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 justify-between">
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-3">
              <span className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">Nantes, France</span>
              <span className="text-white/20 text-xs">— 2nd Thursday of each month</span>
            </div>
            <h2 className="text-[22px] font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              MeetUp Bitcoin Nantes
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg">
              Free, open to all, no level required. Bitcoin talks, workshops and good company in{" "}
              <strong className="text-white/80">Nantes, France</strong>.
              Beginners, professionals, merchants — everyone&apos;s welcome.
            </p>
            <p className="text-white/40 text-xs italic">
              I&apos;m one of the organisers — come say hi.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="https://meetup.orangepeel.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#ed760a] text-black font-bold px-6 py-3 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
            >
              Learn More
            </a>
            <a
              href="https://t.me/meetupbitcoinnantes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 text-white/60 font-medium px-6 py-2.5 text-sm hover:border-white/50 hover:text-white transition-colors rounded-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram Group
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
