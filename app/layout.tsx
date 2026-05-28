import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedPage from "@/components/AnimatedPage";

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['900', '700'],
  variable: '--font-barlow',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadelbitmaps.com"),
  title: {
    default: "Nadel Bitmaps Ltd. | Billboards, Signage & Brand Experiences",
    template: "%s | Nadel Bitmaps Ltd.",
  },
  description:
    "Nadel Bitmaps is a full-service outdoor advertising and branding company. We specialize in billboards, wayfinding signage, fire & egress signs, channel signs, fabric branding, branded merchandise, and social media advertising — helping businesses command attention everywhere they show up.",
  keywords: [
    "outdoor advertising Nigeria",
    "billboard advertising",
    "wayfinding signage",
    "channel signs",
    "fire and egress signs",
    "fabric branding",
    "sartorial branding",
    "cap and mug branding",
    "branded merchandise",
    "social media advertising",
    "outdoor multimedia company",
    "brand experiences",
    "outdoor media coverage",
    "signage company Lagos",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nadelbitmaps.com",
    siteName: "Nadel Bitmaps Ltd.",
    title: "Nadel Bitmaps Ltd. | Billboards, Signage & Brand Experiences",
    description:
      "From large-format billboards to branded merchandise and social media campaigns — Nadel Bitmaps helps your brand show up boldly, everywhere.",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 branded image to your /public folder
        width: 1200,
        height: 630,
        alt: "Nadel Bitmaps Ltd. — Outdoor Advertising & Brand Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadel Bitmaps Ltd. | Billboards, Signage & Brand Experiences",
    description:
      "Full-service outdoor advertising and branding — billboards, signage, fabric branding, merchandise, and digital campaigns.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://nadelbitmaps.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased",barlow.variable, geistSans.variable, geistMono.variable, dmSans.variable)}
    >
        <body className="min-h-full flex flex-col">
            <Navbar />
            <AnimatedPage>{children}</AnimatedPage>
            <Footer />
          </body>
    </html>
  );
}
