import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "./providers";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jakartaDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motivvhealthstudios.com"),
  title: {
    default: "Motivv Health Studios — Where Health & Gaming Are One",
    template: "%s · Motivv Health Studios",
  },
  description:
    "Eleven mobile games designed to engage you with your health — ad-free, free with your benefits.",
  applicationName: "Motivv Health Studios",
  authors: [{ name: "Motivv Health Studios" }],
  keywords: ["Motivv", "health", "gaming", "mobile games", "rewards", "AmeriHealth Caritas"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Motivv Health Studios",
    title: "Motivv Health Studios — Where Health & Gaming Are One",
    description:
      "Eleven mobile games designed to engage you with your health — ad-free, free with your benefits.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivv Health Studios",
    description: "Where Health & Gaming Are One.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#48be9a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jakartaDisplay.variable}`}>
      <body className="min-h-svh bg-grayscale-50 font-sans text-base antialiased">
        <Providers>
          <Header />
          <main id="main" className="min-h-[calc(100svh-var(--header-height))]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
