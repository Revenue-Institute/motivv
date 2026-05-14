import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import { Providers } from "./providers";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import "./globals.css";

const GTM_ID = "GTM-W39553M6";

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
    default: "Motivv Health Studios - Where Health & Gaming Are One",
    template: "%s · Motivv Health Studios",
  },
  description:
    "Eleven mobile games designed to engage you with your health - ad-free, free with your benefits.",
  applicationName: "Motivv Health Studios",
  authors: [{ name: "Motivv Health Studios" }],
  keywords: ["Motivv", "health", "gaming", "mobile games", "rewards", "AmeriHealth Caritas"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Motivv Health Studios",
    title: "Motivv Health Studios - Where Health & Gaming Are One",
    description:
      "Eleven mobile games designed to engage you with your health - ad-free, free with your benefits.",
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
      <head>
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-svh bg-grayscale-50 font-sans text-base antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
