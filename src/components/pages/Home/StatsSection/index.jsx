"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./StatsSection.module.css";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/sections/Container";

const StatsSection = () => {
  const [stats, setStats] = useState({ customers: 0, loads: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounter = () => {
    let start = 0;
    const end = { customers: 99.9, loads: 3000, clients: 500 };
    const duration = 2000;
    const increment = 20;
    const step = duration / increment;

    const counter = setInterval(() => {
      start += 1;
      setStats({
        customers: Math.min((end.customers * start) / increment, end.customers),
        loads: Math.min((end.loads * start) / increment, end.loads),
        clients: Math.min((end.clients * start) / increment, end.clients),
      });
      if (start === increment) clearInterval(counter);
    }, step);
  };

  return (
    <section className="pb-[50px] lg:pb-[100px]" ref={sectionRef}>
      <div
        className={styles.statsSection}
        aria-labelledby="stats-section-heading"
      >
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.smallText}>Number Talks</p>
            <h2 className={styles.title}>
              Top-Rated Drayage <br /> Trucking in the USA <br /> by{" "}
              <span>KHM Logistics</span>
            </h2>
            <Link href="/why-choose-us" className={styles.button}>
              Get Our Story
            </Link>
          </div>

          <div className={styles.right}>
            <div className={styles.statItem}>
              <Image
                src="/images/home/stats/satisfaction.svg"
                alt="Customer Icon"
                width={100}
                height={100}
                className=" w-[70px] md:w-[100px] h-auto"
              />
              <h3>{stats.customers.toFixed(1)}%</h3>
              <p>Satisfying Customers</p>
            </div>

            <div className={styles.statItem}>
              <Image
                src="/images/home/stats/ship.svg"
                alt="Shipment Icon"
                width={100}
                height={100}
                className="w-[70px] md:w-[100px] h-auto"
              />
              <h3>{Math.floor(stats.loads).toLocaleString()}+</h3>
              <p>Loads Shipped</p>
            </div>

            <div className={styles.statItem}>
              <Image
                src="/images/home/stats/happy.svg"
                alt="Happy Clients Icon"
                width={100}
                height={100}
                className=" w-[70px] md:w-[100px] h-auto"
              />
              <h3>{Math.floor(stats.clients)}+</h3>
              <p>Satisfaction & Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
