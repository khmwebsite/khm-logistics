import FaqSection from "@/components/pages/Common/FaqSection";
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import TestimonialsSection from "@/components/pages/Common/TestimonialsSection";
import StatsSection from "@/components/pages/Home/StatsSection";
import WhyCoreValues from "@/components/pages/WhyChooseUs/WhyCoreValues";
import WhyIntroSection from "@/components/pages/WhyChooseUs/WhyIntroSection";

export const metadata = {
  title: "Why Choose Us",
  description:
    "See why businesses nationwide trust KHM Logistics for reliable logistics, fast deliveries, and industry-leading customer service.",
  openGraph: {
    title: "Why Choose KHM Logistics",
    description:
      "Discover the key advantages—speed, reliability, safety, and nationwide coverage—that set KHM Logistics apart.",
    url: "https://www.khmlogistics.com/why-choose-us",
  },
  alternates: {
    canonical: "https://www.khmlogistics.com/why-choose-us",
  },
};

    
export default function WhyChooseUs() { 

  const whyChooseFaqs = [
    {
      question: "Why should I choose KHM Logistics over other logistics providers?",
      answer:
        "KHM Logistics stands out for its commitment to reliability, transparency, and customer satisfaction. Our modern fleet, advanced tracking systems, and experienced team ensure every shipment is handled with precision and care.",
    },
    {
      question: "What makes KHM Logistics a trusted logistics partner?",
      answer:
        "We build trust through consistency. From timely deliveries to real-time updates, KHM Logistics ensures your cargo is always in safe hands — giving you peace of mind and dependable service every step of the way.",
    },
    {
      question: "Does KHM Logistics provide customized logistics solutions?",
      answer:
        "Yes, we design personalized logistics strategies tailored to your business goals, shipment size, and timeline — ensuring efficiency and cost-effectiveness in every delivery.",
    },
    {
      question: "How does KHM Logistics maintain on-time performance?",
      answer:
        "Through intelligent route planning, GPS-enabled tracking, and a dedicated dispatch team, KHM Logistics ensures your shipments arrive safely and on schedule.",
    },
    {
      question: "What industries benefit most from KHM Logistics services?",
      answer:
        "We serve a wide range of industries including construction, manufacturing, retail, e-commerce, and energy — delivering scalable and reliable transportation solutions for all sectors.",
    },
    {
      question: "Is KHM Logistics equipped for specialized and heavy-duty transport?",
      answer:
        "Absolutely. KHM Logistics provides specialized trailers and equipment designed to handle oversized, high-value, and heavy-duty cargo safely and efficiently.",
    },
    {
      question: "How does KHM Logistics ensure shipment safety?",
      answer:
        "Our operations follow strict safety protocols and compliance standards. Each shipment is monitored in real time, minimizing risk and ensuring secure delivery across all routes.",
    },
    {
      question: "Does KHM Logistics provide transparent pricing?",
      answer:
        "Yes, KHM Logistics follows a fully transparent pricing model with no hidden charges. You’ll receive clear, detailed quotes before any shipment is booked.",
    },
    {
      question: "What technology does KHM Logistics use to improve efficiency?",
      answer:
        "We leverage GPS tracking, digital dispatching, and route optimization tools to ensure smarter logistics management, faster deliveries, and improved fuel efficiency.",
    },
    {
      question: "Can I track my shipment in real time?",
      answer:
        "Yes, all KHM Logistics customers have access to real-time shipment tracking, allowing you to monitor your freight status and expected delivery times at any point.",
    },
    {
      question: "Does KHM Logistics offer nationwide coverage?",
      answer:
        "Yes. We operate across all major states and cities in the USA, ensuring your freight reaches its destination safely, wherever it needs to go.",
    },
    {
      question: "How does KHM Logistics support sustainable transportation?",
      answer:
        "We’re committed to eco-friendly logistics by optimizing routes, reducing idle times, and maintaining a modern, fuel-efficient fleet that minimizes our carbon footprint.",
    },
    {
      question: "What level of customer support does KHM Logistics provide?",
      answer:
        "Our dedicated customer service team is available to assist with quotes, updates, and issue resolution — ensuring a smooth experience from pickup to delivery.",
    },
    {
      question: "Can KHM Logistics handle urgent or same-day deliveries?",
      answer:
        "Yes. We offer expedited and priority shipping services for time-sensitive cargo, ensuring fast and reliable deliveries when you need them most.",
    },
    {
      question: "Why is KHM Logistics the right choice for long-term partnerships?",
      answer:
        "Our focus on trust, efficiency, and continuous improvement makes KHM Logistics a reliable long-term partner. We grow with your business, offering scalable and dependable logistics support.",
    },
  ];
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Why Choose Us" 
          description="At KHM Logistics, we pride ourselves on delivering exceptional logistics solutions tailored to meet the unique needs of our clients. Our commitment to excellence, innovative technology, and experienced team ensure that your cargo is handled with the utmost care and efficiency. Choose us for reliable service, competitive pricing, and a partner dedicated to your success."         
          overlayOpacity={0.7}
       /> 

       <WhyIntroSection/>
       <WhyCoreValues/>
       <div className="pt-[50px] lg:pt-[100px]">
         <TestimonialsSection/>
       </div>
       
       <div className="pt-[50px] lg:pt-[100px]">
        <StatsSection/>  
       </div>

       <FaqSection
          title="FAQs — Why Choose Us"
          description="At KHM Logistics, we understand that choosing the right logistics partner is a crucial decision for your business. Our commitment to reliability, transparency, and customer-focused service sets us apart. Explore these frequently asked questions to learn more about what makes KHM Logistics the trusted choice for seamless transportation and supply chain solutions across the USA."
          faqs={whyChooseFaqs}
          leftImage="/images/faq/faq-bg.png"
        />
        
      
    </>
  );
}
