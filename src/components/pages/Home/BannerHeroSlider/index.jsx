"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./BannerHeroSlider.module.css";

const slideData = [
  { bgImage: "/images/home/bannerslider/home-banner1.webp" },
  { bgImage: "/images/home/bannerslider/home-banner2.webp" },
  { bgImage: "/images/home/bannerslider/home-banner3.webp" },
  { bgImage: "/images/home/bannerslider/home-banner4.webp" },
  { bgImage: "/images/home/bannerslider/home-banner5.webp" },
];

export default function BannerHeroSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Preload all images before showing slider
  useEffect(() => {
    let loaded = 0;
    slideData.forEach((slide) => {
      const img = new Image();
      img.src = slide.bgImage;
      img.onload = () => {
        loaded++;
        if (loaded === slideData.length) setIsLoaded(true);
      };
    });
  }, []);

  if (!isLoaded) {
    // ✅ prevent flicker on initial mount
    return <div className={styles.PreloadBg}></div>;
  }

  return (
    <section className={styles.HeroSection}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={false}
        className={styles.Heroswiper}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.HeroContainer}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              <div className={styles.HeroOverlay}></div>
              <div className={`${styles.HeroContent} text-center text-white`}>
                <h1 className={styles.SubTitle}>
                  Drayage Services – Hazmat & Transloading KHM Logistics
                </h1>

                <div className={styles.HeroText}>
                  Drayage Services – Reliable Freight Solutions by KHM Logistics.
                  KHM Logistics is your trusted partner for Drayage Trucking in
                  the USA. We offer reliable & excellence transportation,
                  transloading, and hazmat solutions, helping businesses move
                  cargo efficiently and securely across the country.
                </div>

                <div className={styles.HeroButtons}>
                  <Link href="/contact-us" className="btn">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
