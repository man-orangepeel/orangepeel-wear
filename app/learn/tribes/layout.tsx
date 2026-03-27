import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Tribe",
  description: "Bitcoin communities, meetups, and groups to connect with — find your sovereign tribe.",
  openGraph: { url: "https://orangepeel.fr/learn/tribes" },
};

export default function TribesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
