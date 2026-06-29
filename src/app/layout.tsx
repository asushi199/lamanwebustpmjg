import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portal-digital-ustp-manjung.vercel.app"),
  title: "Portal Digital USTP Manjung",
  description:
    "Satu pintu masuk untuk perkhidmatan digital USTP Daerah Manjung.",
  icons: { icon: "/ustp-logo.png" },
  openGraph: {
    title: "Portal Digital USTP Manjung",
    description:
      "Akses OSC USTP, direktori penyelaras sekolah dan tempahan bilik PKG Daerah Manjung.",
    locale: "ms_MY",
    type: "website",
    images: [{ url: "/ustp-logo.png", width: 1024, height: 1024 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
