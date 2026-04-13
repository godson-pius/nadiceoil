import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import LayoutWrapper from "@/components/LayoutWrapper";

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
});

const bricolage_grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage_grotesque",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Nadice Oil and Gas Limited | Diesel (AGO) Supplier in Enugu",
    template: "%s | Nadice Oil and Gas Limited",
  },
  description:
    "Nadice Oil and Gas Limited is a trusted Diesel (AGO) supplier in Enugu, Nigeria. We provide reliable bulk diesel delivery services for industries, businesses, and commercial operations with efficiency and quality assurance.",

  keywords: [
    "Diesel supplier Enugu",
    "AGO supplier Enugu",
    "Diesel supply Nigeria",
    "Bulk diesel delivery Enugu",
    "Industrial diesel supplier",
    "Fuel supply Enugu",
    "Oil and gas company Enugu",
    "Automotive Gas Oil supplier",
    "Diesel delivery services Nigeria",
  ],

  metadataBase: new URL("https://www.nadiceoilltd.com"),

  openGraph: {
    title: "Diesel (AGO) Supplier in Enugu | Nadice Oil and Gas Limited",
    description:
      "Reliable diesel supply in Enugu. Nadice Oil and Gas delivers high-quality AGO to businesses and industries with fast and dependable service.",
    url: "https://www.nadiceoilltd.com",
    siteName: "Nadice Oil and Gas Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://beta-nadiceoil.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diesel Supply in Enugu - Nadice Oil and Gas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diesel Supplier in Enugu - Nadice Oil and Gas",
    description:
      "Trusted AGO supplier in Enugu providing reliable diesel delivery services.",
    images: ["https://beta-nadiceoil.vercel.app/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.nadiceoilltd.com",
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
      className={`${dm_sans.variable} ${bricolage_grotesque.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <CursorFollower />
      </body>
    </html>
  );
}

