"use client";
import Container from "@/components/sections/Container";
import styles from "./ServicesHero.module.css";
import Image from "next/image";
import SectionTitle from "@/components/sections/SectionTitle";

const ServicesHero = ({ title, description, paragraphs = [], image, alt }) => {
  return (
    <section className="py-[50px] lg:py-[100px]" >
      <Container>
      <div className={styles.mainWrapper}>
        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={alt}
            width={600}
            height={700}
            className={styles.image}
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          {/* <h2 className={styles.title}>{title}</h2> */}
          <SectionTitle title={title} />
          <p className={styles.description}>{description}</p>

          {paragraphs?.length > 0 && (
            <div className={styles.paragraphs}>
              {paragraphs.map((para, index) => (
                <p key={index} className={styles.point}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
