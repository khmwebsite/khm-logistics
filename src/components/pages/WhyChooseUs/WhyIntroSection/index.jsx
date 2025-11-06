"use client";
import styles from "./WhyIntroSection.module.css";
import Image from "next/image";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

export default function WhyIntroSection() {
  return (
    <section className={styles.whyIntroSection}>
      <Container>
        <div className={styles.wrapper}>
          {/* LEFT SIDE IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/why-choose-us/why-intro.webp"
              alt="KHM Logistics team at work"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className={styles.content}>
            <p className={styles.tagline}>Precision. Reliability. Partnership.</p>
            {/* <h2 className={styles.title}>
              Why Businesses Trust <span>KHM Logistics</span>
            </h2> */}
              <SectionTitle title="Why Businesses Trust KHM Logistics" />
            <p className={styles.text}>
              At <strong>KHM Logistics</strong>, we don’t just move cargo — we move
              businesses forward. Our approach combines modern logistics intelligence
              with human reliability to ensure your supply chain runs effortlessly.
            </p>
            <p className={styles.text}>
              From <strong>hazmat transportation</strong> to seamless
              <strong> transloading</strong> and end-to-end <strong>freight handling</strong>,
              every service we offer is built on a foundation of safety, efficiency,
              and accountability.
            </p>
            <p className={styles.textHighlight}>
              Because in logistics, timing and trust make all the difference.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
