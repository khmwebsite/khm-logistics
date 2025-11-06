
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import ContactHeroSec from "@/components/pages/contact/ContactHeroSec";

export const metadata = {
  title: "Contact Us | KHM Logistics - Get in Touch Today",
  description:
    "Have questions or need a quote? Contact KHM Logistics today for professional logistics, warehousing, and supply chain solutions tailored to your needs.",
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
