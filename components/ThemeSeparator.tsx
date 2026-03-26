"use client";

import { usePathname } from "next/navigation";

const COLLECTION_COLORS: Record<string, string> = {
  "/collections/warriors": "#ed760a",
  "/collections/wizards":  "#8b5cf6",
  "/collections/cyphers":  "#6b7280",
};

export default function ThemeSeparator() {
  const pathname = usePathname();
  const color = COLLECTION_COLORS[pathname] ?? "#ed760a";
  return <div style={{ height: "3px", background: color }} />;
}
