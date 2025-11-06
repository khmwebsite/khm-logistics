"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FaqSection.module.css";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

export default function FaqSection({
  title = "Frequently Asked Questions",
  description = "Find quick answers to common questions about our logistics and transportation services.",
  faqs = [],
  leftImage = "/images/faq/faq-side.jpg",
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-[50px] lg:pb-[100px]">
      <Container>
        <div className={styles.inner}>
          {/* LEFT SIDE VISUAL */}
          <div className={styles.leftSide}>
            <div className={styles.overlay}></div>
            <Image
              src={leftImage}
              alt="FAQ Visual"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.leftContent}>
              {/* <h2 className={styles.title}>{title}</h2> */}
              <SectionTitle title={title} />
              <p className={styles.desc}>{description}</p>
            </div>
          </div>

          {/* RIGHT SIDE FAQ ACCORDION */}
          <div className={styles.rightSide}>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <button
                    className={styles.question}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className={styles.icon}>
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={styles.answer}
                    style={{
                      maxHeight: activeIndex === index ? "400px" : "0px",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
    