"use client";
import styles from "./HeroBannerCommon.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeroBannerCommon({
  bgImage,
  title,
  description,
  buttonText,
  buttonLink,
  overlayOpacity = 0.5,
  servicesLink, // ✅ new prop for dynamic Services link
}) {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter(Boolean) || [];

  return (
    <section
      className={styles.HeroBanner}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={styles.Overlay}
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>

      <div className={styles.ContentWrapper}>
        {/* ✅ Dynamic Breadcrumb */}
        <nav className={styles.Breadcrumb}>
          <Link href="/">Home</Link>

          {pathParts.map((part, index) => {
            const label =
              part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");
            const isLast = index === pathParts.length - 1;

            // ✅ Handle "Services" link dynamically
            let href;
            if (label.toLowerCase() === "services") {
              href = servicesLink || "#"; // fallback if not defined
            } else {
              href = "/" + pathParts.slice(0, index + 1).join("/");
            }

            return (
              <span key={index} className={styles.BreadcrumbItem}>
                <span className={styles.Separator}>›</span>
                {isLast ? (
                  <span>{label}</span>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </span>
            );
          })}
        </nav>

        {/* ✅ Title, Description, and Optional Button */}
        {title && <h1 className={styles.Title}>{title}</h1>}
        {description && <p className={styles.Description}>{description}</p>}
        {buttonText && buttonLink && (
          <Link href={buttonLink} className={styles.Button}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
