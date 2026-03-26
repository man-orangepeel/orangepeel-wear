interface GitHubItem {
  name: string;
  type: string;
}

type IconKey = "book" | "mic" | "play" | "film" | "envelope" | "academic";

const CATEGORIES: { key: string; label: string; icon: IconKey }[] = [
  { key: "books",       label: "Books",       icon: "book"     },
  { key: "podcasts",    label: "Podcasts",    icon: "mic"      },
  { key: "channels",   label: "Youtube",     icon: "play"     },
  { key: "movies",      label: "Movies",      icon: "film"     },
  { key: "newsletters", label: "Newsletters", icon: "envelope" },
  { key: "glossary",    label: "Glossary",    icon: "academic" },
];

function CategoryIcon({ type }: { type: IconKey }) {
  const cls = "w-7 h-7 text-[#ed760a]";
  if (type === "book") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
  if (type === "mic") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    </svg>
  );
  if (type === "play") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
  );
  if (type === "film") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v1.5m1.5-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M17.625 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M17.625 13.125h-9.75" />
    </svg>
  );
  if (type === "envelope") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
  // academic
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

async function fetchResources(): Promise<GitHubItem[]> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/PlanB-Network/bitcoin-educational-content/contents/resources",
      {
        next: { revalidate: 86400 },
        headers: { Accept: "application/vnd.github+json" },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.filter((item: GitHubItem) => item.type === "dir") : [];
  } catch {
    return [];
  }
}

export default async function LibraryPage() {
  const resources = await fetchResources();
  const resourceNames = new Set(resources.map((r) => r.name));

  // Keep CATEGORIES order, only show what the API returns
  const filtered = CATEGORIES.filter((cat) => resourceNames.has(cat.key));
  // If a category isn't returned by API, still show it (graceful — display all 6)
  const display = CATEGORIES.filter(
    (cat) => filtered.length === 0 || resourceNames.has(cat.key)
  );

  return (
    <>
      {/* ── Header ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Down The Rabbit Hole
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Bitcoin Library
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Open-source Bitcoin resources from PlanB Network.<br />
            Sharpen your mind. Fuel your sovereignty.
          </p>
        </div>
      </section>

      {/* ── OrangePeel Flow ── */}
      <section className="bg-[#111518] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">From Our Community</p>
            <h2 className="text-[22px] font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              OrangePeel Flow
            </h2>
            <p className="text-white/60 text-sm max-w-lg">
              A free Telegram channel dedicated to Bitcoin — no altcoins, no price noise, no ads.<br />
              Pure signal, for beginners and seasoned Bitcoiners alike. In French for now.
            </p>
          </div>
          <a
            href="https://t.me/OrangePeel_Flow"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#ed760a] text-black font-bold px-6 py-3 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Join on Telegram
          </a>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="bg-white py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {resources.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[#6b7280] text-base mb-6">
                Resources are loading from PlanB Network — check back shortly.
              </p>
              <a
                href="https://planb.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ed760a] text-black font-bold px-8 py-3 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
              >
                Visit PlanB Network
              </a>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-[#6b7280] text-sm">
                  {display.length} resource types — updated daily from{" "}
                  <a
                    href="https://github.com/PlanB-Network/bitcoin-educational-content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ed760a] hover:underline"
                  >
                    PlanB Network
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {display.map((cat) => (
                  <a
                    key={cat.key}
                    href={`https://planb.network/en/resources/${cat.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 p-6 border border-black/10 hover:border-[#ed760a] transition-colors rounded-sm"
                  >
                    <CategoryIcon type={cat.icon} />
                    <h3 className="text-[#111518] font-bold text-base group-hover:text-[#ed760a] transition-colors">
                      {cat.label}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-[#6b7280] group-hover:text-[#ed760a] transition-colors mt-auto">
                      <span>Explore on PlanB</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
