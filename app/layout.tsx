import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOSS Barbershop | Premium erkaklar sartaroshxonasi",
  description: "Samarqanddagi premium barbershop. Soch kesimi, soqol dizayni va professional erkaklar parvarishi.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
