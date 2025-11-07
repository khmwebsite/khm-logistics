import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://www.khmlogistics.com"),

  title: {
    default: "KHM Logistics – Nationwide Freight & Logistics Solutions",
    template: "%s | KHM Logistics",
  },

  description:
    "KHM Logistics provides nationwide freight transportation, warehousing, intermodal, transloading, hazmat logistics, and end-to-end supply chain solutions with reliability, safety, and operational excellence.",

  alternates: {
    canonical: "https://www.khmlogistics.com",
  },

  // openGraph: {
  //   type: "website",
  //   siteName: "KHM Logistics",
  //   url: "https://www.khmlogistics.com",
  //   title: "KHM Logistics – Trusted Freight & Logistics Services Nationwide",
  //   description:
  //     "Reliable logistics partner delivering freight, warehousing, intermodal, hazmat, and supply chain management solutions across the USA.",
  //   images: [
  //     {
  //       url: "/images/khm-og-img.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "KHM Logistics – Reliable Freight & Logistics Services",
  //     },
  //   ],
  // },
  openGraph: {
    type: "website",
    siteName: "KHM Logistics",
    url: "https://www.khmlogistics.com",
    title: "KHM Logistics – Trusted Freight & Logistics Services Nationwide",
    description:
      "Reliable logistics partner delivering freight, warehousing, intermodal, hazmat, and supply chain management solutions across the USA.",
    images: [
      {      
        url: "https://www.khmlogistics.com/images/khm-og-img.png",
        width: 1200,
        height: 630,
        alt: "KHM Logistics – Reliable Freight & Logistics Services",
      },
    ],
  },
  

  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KHM Logistics",
    url: "https://www.khmlogistics.com",
    logo: "https://www.khmlogistics.com/khm-og-img.png",
    email: "support@khmlogistics.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-848-216-7004",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Kilmer Road",
      addressLocality: "Edison",
      addressRegion: "NJ",
      postalCode: "08820",
      addressCountry: "USA",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KHM Logistics",
    image: "https://www.khmlogistics.com/khm-og-img.png",
    url: "https://www.khmlogistics.com",
    telephone: "+1-848-216-7004",
    email: "support@khmlogistics.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Kilmer Road",
      addressLocality: "Edison",
      addressRegion: "NJ",
      postalCode: "08820",
      addressCountry: "USA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.535",
      longitude: "-74.399",
    },
    openingHours: "Mo-Fr 09:00-17:00",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KHM Logistics",
    url: "https://www.khmlogistics.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.khmlogistics.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD SEO Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>

      {/* ✅ Google Analytics */}
      <GoogleAnalytics gaId="G-HXZM7BX294" />
    </html>
  );
}
