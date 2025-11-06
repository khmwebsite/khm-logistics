"use client";
import SectionTitle from "@/components/sections/SectionTitle";
import styles from "./SiteCta.module.css";
import Link from "next/link";

export default function SiteCta({
  title = "Ready to Move Forward?",
  description = "Partner with KHM Logistics and experience smarter, faster, and more reliable logistics solutions tailored to your business.",
  buttonText = "Get a Quote",
  buttonLink = "/contact",
  bgImage = "/images/home/bannerslider/home-banner3.webp",
}) {
  return (
    <section
      className={styles.SiteCta}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.Overlay}></div>

      <div className={styles.ContentWrapper}>
        <div className={styles.InnerBox}>
          {/* <h2 className={styles.Title}>{title}</h2> */}
          <SectionTitle title={title}/>
          <p className={styles.Description}>{description}</p>
          <Link href={buttonLink} className={styles.Button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
