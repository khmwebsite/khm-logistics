import Head from "next/head";

import AboutSection from "@/components/pages/Home/AboutSection";
import BannerHeroSlider from "@/components/pages/Home/BannerHeroSlider";
import ServiceSection from "@/components/pages/Home/ServiceSection";
import StatsSection from "@/components/pages/Home/StatsSection";
import WhyUsSection from "@/components/pages/Home/WhyUsSection";
import WorkProcessSection from "@/components/pages/Home/WorkProcessSection";

export const metadata = {
  title: "Premier Freight, Drayage & Logistics Services Across USA",
  description:
    "KHM Logistics delivers reliable freight, drayage, transloading, and warehousing services nationwide with safety, precision, and on-time delivery.",
  openGraph: {
    title: "Premier Freight & Logistics Services Across USA",
    description:
      "Trusted nationwide trucking, drayage, transloading, warehousing, and hazmat transport services by KHM Logistics.",
    url: "https://www.khmlogistics.com/",
  },
};

// ✅ LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KHM Logistics",
  "image": "https://www.khmlogistics.com/khm-og-img.png",
  "url": "https://www.khmlogistics.com",
  "telephone": "(848) 216-7004",
  "email": "support@khmlogistics.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 Kilmer Road",
    "addressLocality": "Edison",
    "addressRegion": "NJ",
    "postalCode": "08820",
    "addressCountry": "US"
  },
  "description": "KHM Logistics provides nationwide freight transportation, warehousing, intermodal, transloading, hazmat logistics, and supply chain solutions.",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.5362",
    "longitude": "-74.3988"
  }
};

// ✅ WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "KHM Logistics – Nationwide Freight & Logistics Solutions",
  "url": "https://www.khmlogistics.com/",
  "description": "KHM Logistics provides nationwide freight transportation, warehousing, intermodal, transloading, hazmat logistics, and supply chain solutions.",
  "image": "https://www.khmlogistics.com/khm-og-img.png",
  "publisher": {
    "@type": "Organization",
    "name": "KHM Logistics",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.khmlogistics.com/khm-og-img.png"
    }
  }
};

// ✅ Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.khmlogistics.com/"
    }
  ]
};

// ✅ Services ItemList Schema (Fixed URLs)
const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Logistics & Freight Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Supply Chain Logistics",
      "url": "https://www.khmlogistics.com/services/supply-chain"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Drayage Services",
      "url": "https://www.khmlogistics.com/services/drayage"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Transloading Services",
      "url": "https://www.khmlogistics.com/services/transloading"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Warehouse Services",
      "url": "https://www.khmlogistics.com/services/warehouse"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Intermodal Transportation",
      "url": "https://www.khmlogistics.com/services/intermodal"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Hazmat Transportation",
      "url": "https://www.khmlogistics.com/services/hazmat"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }} />
      </Head>

      <BannerHeroSlider />
      <AboutSection />
      <ServiceSection />
      <WorkProcessSection />
      <StatsSection />
      <WhyUsSection />
    </>
  );
}
