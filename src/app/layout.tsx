import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import TidioChat from "@/components/TidioChat";
import CookieConsent from "@/components/CookieConsent";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
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
        <CookieConsent />
      </body>
    </html>
  );
}
