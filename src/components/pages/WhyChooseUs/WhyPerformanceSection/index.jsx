"use client";
import styles from "./WhyPerformanceSection.module.css";
import Container from "@/components/sections/Container";

export default function WhyPerformanceSection() {
  const stats = [
    {
      number: "98%",
      label: "On-Time Delivery Rate",
      desc: "Our clients trust us to meet critical timelines across every shipment, every time.",
    },
    {
      number: "500+",
      label: "Global Partners",
      desc: "A strong international network ensures seamless end-to-end logistics operations.",
    },
    {
      number: "24/7",
      label: "Customer Support",
      desc: "Dedicated logistics experts providing round-the-clock assistance and visibility.",
    },
    {
      number: "30+",
      label: "Industries Served",
      desc: "From chemicals to retail, our multi-sector expertise drives tailored logistics solutions.",
    },
  ];

  return (
    <section className={styles.performance}>
      <Container>
        <div className={styles.header}>
          <p className={styles.subtitle}>Our Performance</p>
          <h2 className={styles.title}>
            Proven <span>Results</span> that Define Reliability
          </h2>
          <p className={styles.desc}>
            At KHM Logistics, our results speak for themselves. We combine advanced logistics
            technologies with unmatched industry expertise to deliver measurable performance.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <h3 className={styles.number}>{item.number}</h3>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.descSmall}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
