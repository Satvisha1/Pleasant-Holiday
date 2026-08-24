import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/shared/FloatingContactButton";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const siteUrl = "https://www.pleasantholiday.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Pleasant Holiday | Trekking & Tours in Nepal, Bhutan, Tibet & India",
    template: "%s | Pleasant Holiday",
  },

  description:
    "Pleasant Holiday offers trekking, cultural tours, and tailor-made Himalayan journeys across Nepal, Bhutan, Tibet, and India with experienced local guides.",

  keywords: [
    "Pleasant Holiday",
    "Nepal trekking",
    "Everest Base Camp Trek",
    "Annapurna Base Camp Trek",
    "Manaslu Trek",
    "Langtang Trek",
    "Nepal tours",
    "Bhutan tours",
    "Tibet tours",
    "India tours",
    "Himalayan trekking",
    "Adventure travel Nepal",
    "Custom trekking Nepal",
  ],

  authors: [
    {
      name: "Pleasant Holiday",
    },
  ],

  creator: "Pleasant Holiday",
  publisher: "Pleasant Holiday",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pleasant Holiday",
    locale: "en_US",

    title:
      "Pleasant Holiday | Trekking & Tours in Nepal, Bhutan, Tibet & India",

    description:
      "Explore unforgettable trekking adventures and cultural journeys across Nepal, Bhutan, Tibet, and India.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pleasant Holiday",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pleasant Holiday | Trekking & Tours in Nepal, Bhutan, Tibet & India",

    description:
      "Explore unforgettable trekking adventures and cultural journeys across Nepal, Bhutan, Tibet, and India.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable}`}>
        <Navbar />

        <main>{children}</main>

        <Footer />

        <FloatingContactButton />
      </body>
    </html>
  );
}