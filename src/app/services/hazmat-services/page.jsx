import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import SiteCta from "@/components/pages/Common/SiteCta";
import FaqSection from "@/components/pages/Common/FaqSection";
import ServicesHero from "@/components/pages/Common/ServicesHero";
import ServiceBenefits from "@/components/pages/Common/ServiceBenefits";

export const metadata = {
  title: "Hazmat Transportation Services",
  description:
    "Certified and compliant hazmat transportation ensuring safe and secure handling of hazardous materials.",
  openGraph: {
    title: "Hazmat Transport – KHM Logistics",
    description:
      "Specialized hazardous material transport with industry-standard safety practices and trained professionals.",
    url: "https://www.khmlogistics.com/services/hazmat",
  },
  alternates: {
    canonical: "https://www.khmlogistics.com/services/hazmat",
  },
};


   
    
export default function HazmatServices() { 
const servicebenefitsData = {
    title: "Key Benefits of Our Hazmat Management Services",
    subtitle: "Why Choose Our Expertise",
    benefits: [
  {
    icon: "/images/services/hazmat-service/safety.svg",
    title: "Safety Assurance",
    text: "We maintain strict adherence to international hazardous materials transport standards, ensuring every shipment is handled with maximum care, safety, and regulatory compliance from origin to destination.",
  },
  {
    icon: "/images/services/hazmat-service/expert.svg",
    title: "Expert Handling",
    text: "Our certified hazmat professionals use advanced protective gear and specialized equipment to ensure secure, damage-free handling across all modes of transport.",
  },
  {
    icon: "/images/services/hazmat-service/security.svg",
    title: "Secure Transit",
    text: "Through reinforced containment measures and well-planned routes, we guarantee safe, reliable, and timely movement of hazardous cargo while minimizing potential risks.",
  },
  {
    icon: "/images/services/hazmat-service/digital.svg",
    title: "Digital Oversight",
    text: "Gain complete shipment visibility with real-time tracking, automated alerts, and data-driven compliance monitoring to ensure accountability at every stage of the journey.",
  },
],
  };

const hazmatFaqs = [
  {
    question: "What are hazmat transportation services, and how does KHM Logistics handle them?",
    answer:
      "Hazmat transportation involves the safe and compliant movement of hazardous materials such as chemicals, flammable goods, and toxic substances. KHM Logistics provides certified hazmat transport services with trained drivers, specialized equipment, and strict adherence to DOT and FMCSA regulations.",
  },
  {
    question: "Is KHM Logistics certified to transport hazardous materials?",
    answer:
      "Yes. KHM Logistics is fully certified and compliant with all federal and state hazmat transportation regulations. Our drivers hold valid hazmat endorsements and receive ongoing safety training to handle sensitive cargo responsibly.",
  },
  {
    question: "What types of hazardous materials can KHM Logistics transport?",
    answer:
      "We safely handle a wide range of hazardous materials, including flammable liquids, corrosives, gases, explosives, and industrial chemicals — all transported under strict safety protocols and regulatory compliance.",
  },
  {
    question: "How does KHM Logistics ensure safety during hazmat shipping?",
    answer:
      "Every hazmat shipment follows a strict safety plan, including route risk assessments, proper packaging, real-time GPS tracking, and emergency response preparedness to prevent incidents during transit.",
  },
  {
    question: "Does KHM Logistics provide hazmat documentation and compliance support?",
    answer:
      "Yes. Our logistics team assists with all necessary documentation, labeling, and regulatory compliance under DOT, FMCSA, and EPA standards to ensure your shipment moves smoothly and lawfully.",
  },
  {
    question: "Can KHM Logistics handle both bulk and packaged hazardous materials?",
    answer:
      "Absolutely. We transport bulk liquids, drums, cylinders, and packaged hazardous goods using specialized trucks and containment systems to maintain maximum safety.",
  },
  {
    question: "Does KHM Logistics provide temperature-controlled hazmat transportation?",
    answer:
      "Yes. For temperature-sensitive hazardous materials, we offer climate-controlled trucking solutions that ensure materials are maintained at safe and compliant conditions throughout transit.",
  },
  {
    question: "Are your hazmat drivers trained and certified?",
    answer:
      "Yes. All KHM Logistics hazmat drivers are extensively trained, federally endorsed, and undergo regular refresher programs to meet evolving safety and compliance standards.",
  },
  {
    question: "Does KHM Logistics offer nationwide hazmat transport coverage?",
    answer:
      "Yes. Our hazmat transportation network spans across the United States, serving industrial hubs, manufacturing zones, and distribution centers with reliable nationwide coverage.",
  },
  {
    question: "Can KHM Logistics integrate hazmat transport with warehousing or drayage services?",
    answer:
      "Yes. We provide integrated logistics solutions that combine hazmat transport with warehousing, drayage, and transloading for seamless supply chain management.",
  },
  {
    question: "How does KHM Logistics ensure environmental compliance during hazmat shipping?",
    answer:
      "We operate under strict environmental and safety guidelines, ensuring all hazardous materials are handled, stored, and disposed of responsibly to minimize ecological impact.",
  },
  {
    question: "Does KHM Logistics offer emergency response or incident management?",
    answer:
      "Yes. Our team maintains emergency response protocols and partnerships with certified agencies to handle any unforeseen incidents safely and effectively.",
  },
  {
    question: "Can KHM Logistics handle international or cross-border hazmat shipments?",
    answer:
      "Yes. We coordinate compliant cross-border hazmat logistics, ensuring all international shipping, labeling, and documentation requirements are properly met.",
  },
  {
    question: "How can I get a hazmat transportation quote from KHM Logistics?",
    answer:
      "You can request a free, no-obligation quote by visiting our Contact page and providing shipment details, material type, and destination. Our specialists will respond promptly with a tailored estimate.",
  },
  {
    question: "Why choose KHM Logistics for hazmat transportation services?",
    answer:
      "Businesses choose KHM Logistics for our certified drivers, safety-first approach, nationwide coverage, and proven expertise in handling hazardous materials with reliability and compliance.",
  },
];
 
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Hazmat Services" 
          description="KHM Logistics provides specialized hazmat services to ensure the safe and compliant transportation of hazardous materials. Our experienced team adheres to all regulatory requirements, offering tailored solutions to meet your specific needs while prioritizing safety and efficiency."         
          overlayOpacity={0.7}
       />   
       <ServicesHero
          title="Hazmat Transportation and Logistics Services"
          description="KHM Logistics provides professional Hazmat transportation and logistics solutions that ensure the safe, compliant, and efficient movement of hazardous materials across the supply chain. Our certified team and advanced fleet guarantee secure handling from origin to destination."
          image="/images/services/hazmat-service/hazmat-service.webp"
          alt="Hazmat Transportation Services"
          paragraphs={[
            "We specialize in the transportation of hazardous materials, offering end-to-end support that includes documentation, labeling, route planning, and strict regulatory compliance with DOT and FMCSA standards.",
            "Our certified Hazmat drivers follow rigorous safety protocols and use advanced containment systems to minimize risk and ensure complete cargo protection throughout transit.",
            "With real-time GPS tracking and digital reporting, clients gain full visibility into every shipment, ensuring peace of mind and operational control.",
            "At KHM Logistics, we combine expertise, reliability, and compliance-driven service to deliver safe and efficient Hazmat logistics solutions nationwide.",
          ]}
        />
       <ServiceBenefits data={servicebenefitsData} />
       <div className="pt-[50px] lg:pt-[100px]">
            <FaqSection
              title="FAQs — Hazmat Services"
              description="Find answers to common questions about our hazardous materials handling, transportation, and safety compliance services."
              faqs={hazmatFaqs}
              leftImage="/images/faq/faq-bg.png"
            />
            <SiteCta/>
          </div>  
    </>
  );
}
