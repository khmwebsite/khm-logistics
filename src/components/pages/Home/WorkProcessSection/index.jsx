"use client";

import Image from "next/image";
import styles from "./WorkProcessSection.module.css";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

const steps = [
  {
    id: "01",
    title: "Order Initiated",
    desc:
      "Once we receive the Delivery Order from our customer, we take full responsibility for the shipment and monitor container availability daily for pickup.",
    image: "/images/home/workflow/workflow1.webp",
  },
  {
    id: "02",
    title: "Order Dispatched",
    desc:
      "When the container is ready at the terminal, the carrier picks it up, collects the ingate ticket, and provides timely updates to the customer.",
    image: "/images/home/workflow/workflow2.webp",
  },
  {
    id: "03",
    title: "Order Delivered",
    desc:
      "When the driver arrives at the warehouse, we offer 2 hours of free unloading time. After unloading, customers receive a signed Delivery Order as POD.",
    image: "/images/home/workflow/workflow3.webp",
  },
  {
    id: "04",
    title: "Order Payment",
    desc:
      "Once the out-gate ticket confirms shipment completion, our accounting team processes payment by generating invoices and handling the billing.",
    image: "/images/home/workflow/workflow4.webp",
  },
];

export default function WorkProcessSection() {
  return (
    <section
      className={`${styles.wrapper} pb-[50px] lg:pb-[100px]`}
      aria-labelledby="work-process-heading"
    >
      <Container>
        <div className={styles.topIntro}>
          <SectionTitle title=" Logistics Workflow" />
        </div>

        <div className={styles.canvas}>
          <svg
            className={styles.pathSvg}
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 120 C 250 40, 450 160, 640 80 C 820 10, 980 120, 1160 80"
              fill="none"
              stroke="#ef9f2f"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              strokeLinecap="round"
              opacity="0.8"
            />
            <g transform="translate(1160, 80)" opacity="0.9">
              <circle cx="0" cy="0" r="12" fill="#fff"></circle>
              <path
                d="M-5 0 C -5 -6, 0 -7, 0 -3 C 0 -7, 5 -6, 5 0 C 5 6, 0 9, 0 12 C 0 9, -5 6, -5 0 Z"
                fill="#ef9f2f"
                transform="scale(0.9)"
              />
            </g>
          </svg>

          <div className={styles.stepsRow}>
            {steps.map((s) => (
              <div key={s.id} className={styles.step}>
                <div className={styles.circleWrap}>
                  <div className={styles.circle}>
                  <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.img}
                      unoptimized={false}
                    />
                    <div className={styles.circleOverlay} />
                  </div>

                  <div className={styles.badge}>
                    <span>{s.id}</span>
                  </div>
                </div>

                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
