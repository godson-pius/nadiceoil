import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import LayoutWrapper from "@/components/LayoutWrapper";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

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
    "Generator fuel supply Enugu",
    "Diesel for telecommunications Enugu",
    "Diesel for construction sites Enugu",
    "Quality diesel supply Enugu",
  ],

  authors: [{ name: "Nadice Oil and Gas Team", url: "https://www.nadiceoilltd.com" }],
  creator: "Nadice Oil and Gas Limited",
  publisher: "Nadice Oil and Gas Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.nadiceoilltd.com",
  },

  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "msvalidate.01": ["bing-site-verification-placeholder"],
    },
  },

  category: "Energy",
};

export const viewport = {
  themeColor: "#f97316", // Primary orange color
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nadice Oil and Gas Limited",
  "image": "https://www.nadiceoilltd.com/logo.png",
  "@id": "https://www.nadiceoilltd.com",
  "url": "https://www.nadiceoilltd.com",
  "telephone": "+2349033341839",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No 2, within 4 corners Enugu, along Enugu-Port Harcourt express road Ozalla",
    "addressLocality": "Enugu",
    "addressRegion": "Enugu State",
    "postalCode": "400001",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.4483,
    "longitude": 7.5139
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/nadiceoil",
    "https://www.linkedin.com/company/nadice-oil-and-gas-limited"
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <CursorFollower />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

