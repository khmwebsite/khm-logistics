"use client";
import { useState } from "react";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactForm from "../../Common/ContactForm";

export default function ContactHeroSec() {
  return (
    <section className="bg-[var(--theme-bg)] py-20 md:py-24">
      <Container>
        <div className="flex flex-col w-full lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-10">
           <div className="w-full text-center md:text-start md:px-2">             
              <SectionTitle title="Get in Touch" />
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
                Have questions about our{" "}
                <strong>Drayage Services</strong>,{" "}
                <strong>Transloading</strong>, or{" "}
                <strong>Hazmat Solutions</strong>?  
                We’re here to help you streamline logistics across the USA with
                precision, reliability, and care.
              </p>
            </div>

            <div className="space-y-8 bg-[var(--white)] shadow-md rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  Location
                </h3>
                <p className="text-gray-700 mt-1 text-base leading-relaxed">
                6 KILMER ROAD, EDISON, NJ 08820
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  Get in Touch
                </h3>
                <p className="text-[var(--secondary)] mt-1 font-medium text-lg">
                  +1 (848) 216-7004
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  Our Email
                </h3>
                <p className="text-[var(--secondary)] mt-1 font-medium text-lg">
                support@khmlogistics.com
                </p>
              </div>
            </div>

            <p className="text-gray-600 italic text-base">
              Let’s move your freight — the{" "}
              <strong className="text-[var(--secondary)]">KHM Logistics</strong> way.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-[var(--white)] shadow-[0_4px_25px_rgba(0,0,0,0.08)] rounded-2xl p-6 sm:p-8 md:p-10">           
            <ContactForm/>
          </div>
        </div>
      </Container>
    </section>
  );
}
