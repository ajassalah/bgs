import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import TidioChat from "@/components/TidioChat";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://britishgraduateschool.co.uk"),
  title: {
    default: "British Graduate School",
    template: "%s | British Graduate School",
  },
  description: "Unlock your potential with British Graduate School - where global expertise meets local excellence, preparing you for a future without limits.",
  icons: {
    icon: "/Tab%20Image%20.png",
  },
  openGraph: {
    type: "website",
    siteName: "British Graduate School",
    url: "https://britishgraduateschool.co.uk",
    title: "British Graduate School",
    description: "Unlock your potential with British Graduate School - where global expertise meets local excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Tab%20Image%20.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={inter.variable}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "British Graduate School",
            "url": "https://britishgraduateschool.co.uk",
            "logo": "https://britishgraduateschool.co.uk/BGS%20UK%20Logo.png",
            "description": "Unlock your potential with British Graduate School - where global expertise meets local excellence.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            },
            "sameAs": [
              "https://www.facebook.com/britishgraduateschool",
              "https://www.linkedin.com/company/british-graduate-school"
            ]
          }}
        />
        <Analytics />
        <TidioChat />
        {children}
      </body>
    </html>
  );
}
