import coursesData from "@/public/courses.json";

interface CourseEntry {
  item: string;
  title: string;
  goal: string;
  topic: string;
  level: string;
}

// ── Filtres ──────────────────────────────────────────────────────────────────

const ALLOWED_LEVELS = new Set(["beginner", "intermediate", "advanced"]);

// Social Studies : 6 items conservés (retrait de HIS203, SOC104, ECO104)
const SOCIAL_ALLOWED = new Set([
  "HIS205", "ECO201", "PHI203", "PHI101", "ECO204", "ECO203", "HIS201",
]);

// Ordre explicite des items par section
const SECTION_ORDER: Record<string, string[]> = {
  "bitcoin": ["BTC101"],  // BTC101 en premier, les autres suivent dans leur ordre naturel
  "security": ["SCU101", "SCU202", "CYP201", "CYP302"],
  "social studies": ["HIS205", "ECO201", "PHI203", "PHI101", "ECO204", "ECO203", "HIS201"],
};

function sortItems(items: CourseEntry[], topicKey: string): CourseEntry[] {
  const order = SECTION_ORDER[topicKey];
  if (!order) return items;
  return [...items].sort((a, b) => {
    const ai = order.indexOf(a.item);
    const bi = order.indexOf(b.item);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

// ── Métadonnées des sections ──────────────────────────────────────────────────

// Ordre des sections : Bitcoin → Security → Business → The Bigger Picture → Mining
const TOPIC_ORDER = ["bitcoin", "security", "business", "social studies", "mining"];

const TOPIC_META: Record<string, { label: string; tagline: string }> = {
  "bitcoin":        { label: "Understand Bitcoin",    tagline: "From first principles to full sovereignty." },
  "security":       { label: "Secure Your Stack",     tagline: "Self-custody, privacy, and digital hygiene." },
  "business":       { label: "Bitcoin for Business",  tagline: "Payments, treasury, and business strategy." },
  "social studies": { label: "The Bigr Picture",    tagline: "History, economics, and the ideas that matter." },
  "mining":         { label: "Mining",                tagline: "How the network sustains itself." },
};

// ── Données ───────────────────────────────────────────────────────────────────

const FEATURED_URL  = "https://planb.academy/en/courses/the-bitcoin-journey-2b7dc507-81e3-4b70-88e6-41ed44239966";
const PLANB_URL     = "https://planb.academy/en/learn-anytime";
const FEATURED_ITEM = "BTC101";

const allCourses = (coursesData as CourseEntry[]).filter((c) => {
  if (!ALLOWED_LEVELS.has(c.level)) return false;
  if (c.topic.toLowerCase() === "protocol") return false;
  if (c.topic.toLowerCase() === "social studies" && !SOCIAL_ALLOWED.has(c.item)) return false;
  return true;
});

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  const featured = allCourses.find((c) => c.item === FEATURED_ITEM);
  // BTC101 reste dans la section "Understand Bitcoin" (en première position)
  const rest = allCourses;

  const grouped: Record<string, CourseEntry[]> = {};
  for (const course of rest) {
    const key = course.topic.toLowerCase();
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(course);
  }

  const orderedKeys = TOPIC_ORDER.filter((k) => grouped[k]?.length);

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
            From Newbie to Maxi
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Open-source Bitcoin courses from PlanB Network.
            From zero to self-sovereign — at your pace, on your terms.
          </p>
        </div>
      </section>

      {/* ── Featured ── */}
      {featured && (
        <section className="bg-[#111518] py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">Start Here</p>
              <h2 className="text-[28px] font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {featured.title}
              </h2>
              <p className="text-white/60 text-sm max-w-lg">{featured.goal}</p>
            </div>
            <a
              href={FEATURED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#ed760a] text-black font-bold px-8 py-3 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
            >
              Start the Journey
            </a>
          </div>
        </section>
      )}

      {/* ── OrangePeel Flow ── */}
      <section className="bg-[#111518] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">Stay in the Signal</p>
            <h2 className="text-[28px] font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              OrangePeel Flow
            </h2>
            <p className="text-white/60 text-sm max-w-lg">
              Between two courses, keep your knowledge fresh. A free Telegram channel dedicated to Bitcoin — adoption signals, fundamentals, weekly community poll. In French for now.
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

      {/* ── Courses by Topic ── */}
      <section className="bg-white py-16 px-6 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {orderedKeys.map((topicKey) => {
            const meta = TOPIC_META[topicKey];
            const items = sortItems(grouped[topicKey], topicKey);
            return (
              <div key={topicKey}>
                <div className="mb-6">
                  <h2
                    className="text-[22px] font-bold text-[#111518] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {meta.label}
                  </h2>
                  <p className="text-[#ed760a] text-sm">{meta.tagline}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((course) => (
                    <a
                      key={course.item}
                      href={PLANB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-6 border border-black/10 hover:border-[#ed760a] transition-colors rounded-sm"
                    >
                      <h3 className="text-[#111518] font-bold text-base group-hover:text-[#ed760a] transition-colors">
                        {course.title}
                      </h3>
                      {course.goal && (
                        <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-2">
                          {course.goal}
                        </p>
                      )}
                      <span className="text-[10px] font-medium tracking-widest uppercase text-black/20 mt-auto">
                        {course.item}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
