"use client";
import Container from "@/components/sections/Container";
import styles from "./ServiceBenefits.module.css";
import Image from "next/image";
import SectionTitle from "@/components/sections/SectionTitle";

export default function ServiceBenefits({ data }) {
  const { title, subtitle, benefits } = data;

  return (
    <section className={`${styles.benefitsSection} py-[50px] lg:py-[100px] `}>
      <div className={styles.overlay}></div>

      <Container>
        <div className={styles.header}>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {/* {title && <h2 className={styles.title}>{title}</h2>} */}
          <SectionTitle title={title}/>
        </div>

        <div className={styles.grid}>
          {benefits?.map((item, index) => (
            <div className={styles.card} key={index}>
              <span className={styles.borderTop}></span>
              <span className={styles.borderBottom}></span>

              <div className={styles.iconWrapper}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={400}
                  height={400}
                  className={styles.icon}
                />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
