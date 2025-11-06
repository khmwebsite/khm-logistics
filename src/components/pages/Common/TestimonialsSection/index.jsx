"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./TestimonialsSection.module.css";
import Image from "next/image";
import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

const testimonials = [
  {
    name: "Michael Turner",
    role: "Operations Manager, FreightCore Inc.",
    image: "/images/testimonials/user.png",
    text: "KHM Logistics has consistently delivered on time and with great professionalism. Their team handles every shipment like it’s their own — reliable, transparent, and efficient.",
  },
  {
    name: "Sarah Mitchell",
    role: "Supply Chain Lead, Horizon Retail",
    image: "/images/testimonials/user.png",
    text: "Partnering with KHM Logistics simplified our transport operations. Their real-time updates and responsive support make them one of the best logistics partners we’ve worked with.",
  },
  {
    name: "James Carter",
    role: "Director, TransAmerica Imports",
    image: "/images/testimonials/user.png",
    text: "Their team understands the complexities of specialized freight. KHM Logistics has been exceptional in providing safe and cost-effective trucking solutions for our operations.",
  },
  {
    name: "Linda Green",
    role: "Procurement Head, Pacific Supply Co.",
    image: "/images/testimonials/user.png",
    text: "KHM Logistics delivers quality every time — from communication to execution, their professionalism and efficiency have made them our go-to logistics partner.",
  },
  {
    name: "David Reynolds",
    role: "Logistics Coordinator, NorthGate Foods",
    image: "/images/testimonials/user.png",
    text: "KHM Logistics has been a dependable partner for our nationwide deliveries. Their precision, timely updates, and well-maintained fleet make logistics simple and stress-free.",
  },
  {
    name: "Emily Rodriguez",
    role: "Warehouse Manager, Nova Packaging",
    image: "/images/testimonials/user.png",
    text: "Working with KHM Logistics has been a seamless experience. Their communication, flexibility, and commitment to customer satisfaction stand out in every shipment we handle together.",
  },
  {
    name: "Robert Hayes",
    role: "Supply Chain Director, UrbanCraft Interiors",
    image: "/images/testimonials/user.png",
    text: "From heavy loads to time-sensitive deliveries, KHM Logistics has never let us down. Their professionalism and efficiency truly reflect what modern logistics should look like.",
  },
  
];

export default function TestimonialsSection() {
  return (
    <section className="pb-[50px] lg:pb-[100px]">
        <Container>
            <div>
                <div className="">
                    <div className={styles.header}>
                    <span className={styles.label}>Testimonials</span>
                    <SectionTitle title="What Our Clients Say" />
                    </div>

                    <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={900}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className={styles.swiper}
                    >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                        <div className={styles.card}>
                            <p className={styles.text}>&quot;{item.text}&quot;</p>
                            <div className={styles.client}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                className={styles.image}
                            />
                            <div>
                                <h4 className={styles.name}>{item.name}</h4>
                                <p className={styles.role}>{item.role}</p>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    </section>
  );
}
