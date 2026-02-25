"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

export default function AboutSection() {
  return (
    <>
     <Container>
        <section className={styles.aboutSection}>
        <div className={styles.imageContainer}>
        <Image
            src="/images/home/about-section/abt.webp" 
            alt="Global logistics illustration"
            width={1080}
            height={1080}
            className={styles.image}
            priority
        />
        </div>

        <div className={styles.content}>
        <p className={styles.subheading}>About Us</p>
         <SectionTitle title=" Our Inspiration For Efficient Cargo Solutions in 2026." />

        <p className={styles.text}>
            At{" "}
            <span className={styles.brandHighlight}>KHM Logistics</span>, we
            specialize in providing reliable and efficient{" "}
            <strong>drayage services across the USA</strong>. Whether you're
            moving containers from port to rail, warehouse to terminal, or any
            point in between, our team ensures a seamless and cost-effective
            solution tailored to your supply chain. Our professional team ensures
            your <strong>Drayage Services USA</strong> are handled with precision
            and compliance.
        </p>

        <p className={styles.text}>
            Whether you need hazmat, transloading, or{" "}
            <strong>Drayage Trucking in the USA</strong>, we’ve got you covered
            coast to coast. Our dedicated team ensures your freight is handled
            safely, especially for <strong>hazmat shipments</strong>, while our{" "}
            <strong>transloading hubs</strong> are strategically positioned to
            support cost-effective logistics throughout the USA.
        </p>

        <Link href="/about" className={styles.readMoreBtn}>
            Read More
        </Link>
        </div>
        </section>
     </Container>
    </>
   
  );
}
