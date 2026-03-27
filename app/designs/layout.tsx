import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Our Designs",
  description: "Explore Orange Peel Bitcoin designs — provocative, subtle, cryptic art for sovereign minds.",
  openGraph: { url: "https://orangepeel.fr/designs" },
};

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
