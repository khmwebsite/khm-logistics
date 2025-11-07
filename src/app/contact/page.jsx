
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import ContactHeroSec from "@/components/pages/contact/ContactHeroSec";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KHM Logistics for freight quotes, logistics assistance, and nationwide transportation solutions.",
  openGraph: {
    title: "Contact KHM Logistics",
    description:
      "Reach out to our logistics experts for support, service inquiries, and freight assistance.",
    url: "https://www.khmlogistics.com/contact-us",
  },
  alternates: {
    canonical: "https://www.khmlogistics.com/contact-us",
  },
};




export default function Contact() {
  return (
    <>
      <HeroBannerCommon
        bgImage="/images/about/2.png"
        title="Trucking Services USA – Reliable Freight & Special Equipment | KHM Logistics"
        description="At KHM Logistics, we take pride in delivering dependable and flexible trucking services across the USA. Whether you need standard freight shipping or specialized equipment for unique loads, our experienced team ensures your cargo moves safely, efficiently, and on schedule. Every shipment matters to us — because we handle your freight as if it were our own."
        overlayOpacity={0.7}
      />

      <ContactHeroSec/>
    </>
  );
}
