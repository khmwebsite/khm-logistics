import FaqSection from "@/components/pages/Common/FaqSection";
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import SiteCta from "@/components/pages/Common/SiteCta";
import ServiceSection from "@/components/pages/Home/ServiceSection";

export const metadata = {
  title: "Our Services | KHM Logistics - Complete Logistics & Freight Solutions",
  description:
    "Explore KHM Logistics’ full range of services including warehousing, intermodal transport, transloading, and hazardous material logistics. We ensure smooth operations from pickup to delivery.",
};

    
export default function Services() { 
     const servicesFaqs = [
        {
          question: "What types of logistics services does KHM Logistics provide?",
          answer:
            "KHM Logistics offers a complete range of logistics solutions, including full truckload (FTL), less-than-truckload (LTL), drayage, transloading, warehousing, and last-mile delivery across the USA.",
        },
        {
          question: "Does KHM Logistics handle port-to-warehouse transportation?",
          answer:
            "Yes, we specialize in port drayage services — efficiently transporting containers from ports to warehouses, distribution centers, or final destinations with precision and speed.",
        },
        {
          question: "Can KHM Logistics manage time-sensitive shipments?",
          answer:
            "Absolutely. Our team is equipped to handle urgent or time-critical deliveries through dedicated dispatch systems and optimized routing for on-time performance.",
        },
        {
          question: "Does KHM Logistics offer temperature-controlled shipping?",
          answer:
            "Yes, we provide refrigerated and temperature-controlled trucking options to ensure your perishable or sensitive goods are delivered safely and in perfect condition.",
        },
        {
          question: "How does KHM Logistics ensure shipment safety?",
          answer:
            "All shipments are handled by certified drivers and secured with modern safety protocols, GPS tracking, and strict compliance with FMCSA and DOT regulations.",
        },
        {
          question: "Can I schedule recurring freight deliveries with KHM Logistics?",
          answer:
            "Yes. We offer flexible recurring shipment plans for businesses that require consistent transportation schedules, helping streamline regular deliveries.",
        },
        {
          question: "Does KHM Logistics offer same-day or express delivery?",
          answer:
            "For select routes and regions, KHM Logistics provides same-day or expedited delivery services designed for clients who need immediate shipping solutions.",
        },
        {
          question: "What areas does KHM Logistics serve?",
          answer:
            "We operate nationwide across the United States, with dedicated services near major ports, industrial zones, and logistics hubs for seamless transportation coverage.",
        },
        {
          question: "Can KHM Logistics handle heavy haul or oversized loads?",
          answer:
            "Yes. Our specialized fleet includes flatbeds, step decks, and extendable trailers to handle oversized and heavy cargo safely and efficiently.",
        },
        {
          question: "Does KHM Logistics offer warehousing and inventory support?",
          answer:
            "We provide secure, strategically located warehousing and inventory management solutions to help businesses store, consolidate, and distribute their goods efficiently.",
        },
        {
          question: "How can I track my shipment with KHM Logistics?",
          answer:
            "All our shipments come with real-time GPS tracking, giving clients full visibility into delivery progress and estimated arrival times.",
        },
        {
          question: "Does KHM Logistics handle cross-docking or transloading?",
          answer:
            "Yes, we offer professional cross-docking and transloading services to speed up your supply chain and reduce storage time and costs.",
        },
        {
          question: "Are your logistics services customizable?",
          answer:
            "Every business has unique shipping needs. KHM Logistics creates tailored logistics plans that align with your operations, timelines, and budget.",
        },
        {
          question: "How can I get a quote for logistics services?",
          answer:
            "You can request a free, no-obligation quote directly from our Contact page by sharing your shipment details, routes, and preferred service type.",
        },
        {
          question: "Why do companies choose KHM Logistics?",
          answer:
            "Businesses trust KHM Logistics for our reliability, transparency, nationwide network, and commitment to delivering cost-effective, high-quality logistics services every time.",
        },
      ];
      
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Services" 
          description="At KHM Logistics, we pride ourselves on offering a comprehensive suite of logistics and supply chain services tailored to meet the unique needs of our clients. Our expertise spans across various domains, ensuring efficient and reliable solutions for all your logistics requirements."         
          overlayOpacity={0.7}
       />   
       <div className="pt-[50px] lg:pt-[100px]">
          <ServiceSection/>
          <FaqSection
            title="FAQs — Services"
            description="Get answers to the most common questions about our trucking and freight services."
            faqs={servicesFaqs}
            leftImage="/images/faq/faq-bg.png"
          />
          <SiteCta/>
       </div>
    </>
  );
}
