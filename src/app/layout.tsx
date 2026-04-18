import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "British Graduate School | Empowering Minds, Redefining Boundaries",
  description: "Unlock your potential with British Graduate School - where global expertise meets local excellence, preparing you for a future without limits.",
  icons: {
    icon: "/bgs-logo-cropped.webp",
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
        <link rel="icon" href="/bgs-logo-cropped.webp" />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "British Graduate School",
            "url": "https://britishgraduateschool.co.uk",
            "logo": "https://britishgraduateschool.co.uk/bgs-logo-cropped.webp",
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
        {children}
      </body>
    </html>
  );
}
