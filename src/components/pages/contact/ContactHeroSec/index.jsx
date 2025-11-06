"use client";
import { useState } from "react";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactForm from "../../Common/ContactForm";

export default function ContactHeroSec() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your inquiry has been submitted successfully.");
  };

  return (
    <section className="bg-[var(--theme-bg)] py-20 md:py-24">
      <Container>
        <div className="flex flex-col w-full lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-10">
           <div className="w-full text-center md:text-start md:px-2">
              {/* <h2 className="text-[30px] font-bold text-[var(--primary)] mb-4">
                Get in Touch
              </h2> */}
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
                  D-151, Phase 8, Industrial Area Mohali, Sahibzada Ajit Singh Nagar, Punjab 160071
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  Get in Touch
                </h3>
                <p className="text-[var(--secondary)] mt-1 font-medium text-lg">
                  +91 (987) 654-3210
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  Our Email
                </h3>
                <p className="text-[var(--secondary)] mt-1 font-medium text-lg">
                  info@khmlogistics.com
                </p>
              </div>
            </div>

            <p className="text-gray-600 italic text-base">
              Let’s move your freight — the{" "}
              <strong className="text-[var(--secondary)]">KHM Logistics</strong> way.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-[var(--white)] shadow-[0_4px_25px_rgba(0,0,0,0.08)] rounded-2xl p-6 sm:p-8 md:p-10">
            {/* <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[var(--primary)]">
              Connect With Our Logistics Team
            </h3> */}

            {/* <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition"
              />

              <input
                type="text"
                name="suburb"
                placeholder="Enter your suburb"
                value={formData.suburb}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition"
              />

              <textarea
                name="description"
                rows="4"
                placeholder="Describe your shipment..."
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[var(--secondary)] w-full text-[var(--white)] py-3 rounded-full font-medium hover:bg-[var(--primary)] transition-all"
              >
                Submit Inquiry
              </button>
            </form> */}
            <ContactForm/>
          </div>
        </div>
      </Container>
    </section>
  );
}
