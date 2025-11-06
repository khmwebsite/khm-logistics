

import AboutSection from "@/components/pages/Home/AboutSection";
import BannerHeroSlider from "@/components/pages/Home/BannerHeroSlider";
import ServiceSection from "@/components/pages/Home/ServiceSection";
import StatsSection from "@/components/pages/Home/StatsSection";
import WhyUsSection from "@/components/pages/Home/WhyUsSection";
import WorkProcessSection from "@/components/pages/Home/WorkProcessSection";

export default function HomePage() {
  return (
    <>
        <BannerHeroSlider/>
        <AboutSection/>
        <ServiceSection/>
        <WorkProcessSection/>
        <StatsSection/>
        <WhyUsSection/>   
        
    </>
  );
}
