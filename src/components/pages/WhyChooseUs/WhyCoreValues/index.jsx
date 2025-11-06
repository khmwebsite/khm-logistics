"use client";
import styles from "./WhyCoreValues.module.css";
import Image from "next/image";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

export default function WhyCoreValues() {
  const values = [
    {
      icon: "/images/why-choose-us/operational.svg",
      title: "Operational Efficiency",
      text: "We optimize every route, process, and touchpoint to ensure time-bound and cost-efficient deliveries — helping businesses operate seamlessly.",
    },
    {
      icon: "/images/why-choose-us/safety.svg",
      title: "Safety & Compliance",
      text: "KHM Logistics is built on strict adherence to international safety standards, especially in handling hazmat and high-value cargo.",
    },
    {
      icon: "/images/why-choose-us/innovation.svg",
      title: "Continuous Innovation",
      text: "From automated tracking systems to AI-based freight optimization, innovation drives our service excellence and client satisfaction.",
    },
  ];

  return (
    <section>
        <div className={styles.whyCoreValues}>
            <Container>
                <div className={styles.header}>
                <p className={styles.subtitle}>Core Principles</p>
                {/* <h2 className={styles.title}>
                    Our <span>Commitment</span> to Excellence
                </h2> */}
                <SectionTitle title="Our Commitment to Excellence"/>
                <p className={styles.desc}>
                    Every shipment, client, and partnership is guided by principles that make KHM Logistics a trusted logistics partner across industries.
                </p>
                </div>

                <div className={styles.grid}>
                {values.map((item, index) => (
                    <div key={index} className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Image
                        src={item.icon}
                        alt={item.title}
                        width={100}
                        height={100}
                        className={styles.icon}
                        />
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.text}</p>
                    </div>
                ))}
                </div>
            </Container>
        </div>
    </section>
  );
}
