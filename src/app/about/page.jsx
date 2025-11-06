import AboutHero from "@/components/pages/About/AboutHero";
import FaqSection from "@/components/pages/Common/FaqSection";
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import TestimonialsSection from "@/components/pages/Common/TestimonialsSection";
import StatsSection from "@/components/pages/Home/StatsSection";

export const metadata = {
  title: "About Us | KHM Logistics - Trusted Logistics & Supply Chain Partner",
  description:
    "Learn about KHM Logistics, a trusted name in logistics and supply chain management. We deliver excellence in transportation, warehousing, and freight solutions tailored to your business needs.",
};
    
export default function About() {
  const aboutFaqs = [
    {
      question: "What services does KHM Logistics offer?",
      answer:
        "KHM Logistics provides comprehensive trucking and logistics solutions across the USA, including freight transportation, drayage, transloading, warehousing, and specialized equipment transport.",
    },
    {
      question: "Where is KHM Logistics based?",
      answer:
        "KHM Logistics operates nationwide across the United States, strategically serving ports, warehouses, and industrial hubs to ensure efficient logistics coverage.",
    },
    {
      question: "What makes KHM Logistics different from other trucking companies?",
      answer:
        "Our commitment to reliability, transparency, and safety sets us apart. We combine a modern fleet, real-time tracking, and a dedicated support team to deliver excellence in every shipment.",
    },
    {
      question: "Does KHM Logistics handle hazardous materials (Hazmat)?",
      answer:
        "Yes, KHM Logistics is certified and equipped to transport hazardous materials safely and in full compliance with federal and state regulations.",
    },
    {
      question: "Can KHM Logistics handle oversized or special equipment loads?",
      answer:
        "Absolutely. We specialize in transporting oversized, high-value, and heavy-duty equipment using custom trailers and experienced operators who ensure safe and timely delivery.",
    },
    {
      question: "Does KHM Logistics provide real-time shipment tracking?",
      answer:
        "Yes. We offer real-time tracking and status updates for all shipments, giving our clients full visibility and confidence throughout the delivery process.",
    },
    {
      question: "Which industries does KHM Logistics serve?",
      answer:
        "We serve a diverse range of industries including manufacturing, construction, retail, energy, and e-commerce — providing tailored transport solutions for each sector.",
    },
    {
      question: "Does KHM Logistics offer warehousing and storage options?",
      answer:
        "Yes, we provide secure warehousing and transloading facilities that streamline your supply chain and support efficient cargo management.",
    },
    {
      question: "Is KHM Logistics insured and compliant with U.S. regulations?",
      answer:
        "Yes, KHM Logistics is fully licensed, insured, and compliant with FMCSA and DOT standards to ensure safe and lawful operations across the USA.",
    },
    {
      question: "How does KHM Logistics ensure timely deliveries?",
      answer:
        "Our experienced dispatch team, optimized routes, and advanced GPS systems help us maintain on-time performance and minimize delivery delays.",
    },
    {
      question: "Can I request a customized logistics plan for my business?",
      answer:
        "Definitely. KHM Logistics offers customized logistics solutions tailored to your company’s specific shipping needs, schedule, and budget.",
    },
    {
      question: "Does KHM Logistics provide cross-border transportation?",
      answer:
        "Yes. We support cross-border freight movements between the USA, Canada, and Mexico, ensuring smooth customs clearance and documentation.",
    },
    {
      question: "How can I get a quote for trucking services?",
      answer:
        "You can easily request a free quote by visiting our Contact page or reaching out to our support team with your shipment details and requirements.",
    },
    {
      question: "Why should I choose KHM Logistics for my logistics needs?",
      answer:
        "With a customer-first approach, dependable service, and nationwide coverage, KHM Logistics is the trusted partner businesses rely on for efficient, safe, and cost-effective logistics.",
    },
  ];
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Trucking Services USA – Reliable Freight & Special Equipment | KHM Logistics" 
          description="At KHM Logistics, we take pride in delivering dependable and flexible trucking services across the USA. Whether you need standard freight shipping or specialized equipment for unique loads, our experienced team ensures your cargo moves safely, efficiently, and on schedule. Every shipment matters to us — because we handle your freight as if it were our own."         
          overlayOpacity={0.7}
       />  
      <AboutHero/> 
      <StatsSection/>
      <TestimonialsSection/>
      <FaqSection
        title="FAQs — KHM Logistics"
        description="Get answers to the most common questions about our trucking and freight services."
        faqs={aboutFaqs}
        leftImage="/images/faq/faq-bg.png"
      />
    </>
  );
}
