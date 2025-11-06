"use client";
import Container from "@/components/sections/Container";
import styles from "./WhyUsSection.module.css";
import Image from "next/image";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactForm from "../../Common/ContactForm";


const WhyUsSection = () => {
  return (
    <section className={`${styles.whyUsSection} pb-[50px] lg:pb-[100px]`}>
      <Container>
        <div className={styles.whyUsWrapper}>
          {/* LEFT SIDE: CONTENT */}
          <div className={styles.left}>
            <p className={styles.smallHeading}>Why Choose Us</p>
            <SectionTitle title="Go With Our Specializations" />
            <p className={styles.text}>
              Ready to optimize your freight flow? Contact{" "}
              <strong>KHM Logistics</strong>. Our team ensures compliance with
              standards across borders, following insights from{" "}
              <span className={styles.highlight}>
                Logistics Management Magazine
              </span>
              . Ready to simplify your logistics? Contact us today for reliable{" "}
              <strong>Drayage Services USA</strong> tailored to your needs.
            </p>

            <div className={styles.imageBox}>
              <Image
                src="/images/home/why-us/why-us.webp"
                alt="Why Us Image"
                width={800}
                height={800}
                className={styles.image}
              />
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className={styles.right}>
           <ContactForm/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
