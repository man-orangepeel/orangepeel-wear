import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Way We Peel",
  description: "Our six pillars — how Orange Peel creates Bitcoin apparel with purpose, craft and sovereignty.",
  openGraph: { url: "https://orangepeel.fr/about/how-we-work" },
};

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
