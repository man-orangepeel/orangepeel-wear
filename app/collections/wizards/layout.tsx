import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizards Collection",
  description: "The Wizards — subtle Bitcoin apparel for those who speak in layers and think in protocols.",
  openGraph: { url: "https://orangepeel.fr/collections/wizards" },
};

export default function WizardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
