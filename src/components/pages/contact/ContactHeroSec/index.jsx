"use client";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactForm from "../../Common/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactHeroSec() {
  return (
    <section className="relative py-24  overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[380px] h-[380px] bg-[#cfe1ff] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] bg-[#ffd9c9] rounded-full blur-[120px] opacity-40"></div>
      </div>

      <Container>
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-14">
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="text-center md:text-left">
              <SectionTitle title="KHM - Logistics" />

              <p className="text-gray-600 text-lg max-w-xl mt-4 leading-relaxed mx-auto md:mx-0">
                Connect with our logistics experts for seamless{" "}
                <strong className="text-[var(--secondary)]">Drayage</strong>,{" "}
                <strong className="text-[var(--secondary)]">Transloading</strong>, and{" "}
                <strong className="text-[var(--secondary)]">Hazmat Services</strong>.
                We're here to support your supply chain with precision and care.
              </p>
            </div>

            <div className="relative p-10 bg-white backdrop-blur-xl rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.07)] border border-gray-100">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-l-lg"></div>
              <div className="space-y-8">
                <Link
                  href="https://www.google.com/maps/place/6+Kilmer+Rd,+Edison,+NJ+08820,+USA/"
                  target="_blank"
                  className="group flex items-start gap-4 cursor-pointer transition-all"
                >
                  <div className="p-3 rounded-xl bg-[#eef3ff] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                    <p className="text-[var(--secondary)] mt-1 font-semibold leading-relaxed">
                      6 KILMER ROAD, EDISON, NJ 08820
                    </p>
                  </div>
                </Link>

                <Link
                  href="tel:+18482167004"
                  className="group flex items-start gap-4 cursor-pointer transition-all"
                >
                  <div className="p-3 rounded-xl bg-[#eef3ff] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-[var(--secondary)] mt-1 font-semibold text-lg">
                      +1 (848) 216-7004
                    </p>
                  </div>
                </Link>

                <Link
                  href="mailto:support@khmlogistics.com"
                  className="group flex items-start gap-4 cursor-pointer transition-all"
                >
                  <div className="p-3 rounded-xl bg-[#eef3ff] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-[var(--secondary)] mt-1 font-semibold text-lg">
                      support@khmlogistics.com
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-gray-700 italic text-base md:pl-2">
              Logistics made smarter — the{" "}
              <strong className="text-[var(--secondary)]">KHM way</strong>.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white backdrop-blur-xl border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.08)] rounded-[28px] p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
