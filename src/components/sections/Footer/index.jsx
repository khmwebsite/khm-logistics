import Link from "next/link";
import Image from "next/image";
import Container from "@/components/sections/Container";
import styles from "./Footer.module.css";
import LogoWhite from "@/components/svg/LogoWhite";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.Footermain}>
        <Container>
          <div className={styles.Footerinner}>
            <div className=" text-center border-b-[1px] mb-8">
                  <h3 className={styles.socailTitle}>
                    Follow KHM Logistics
                  </h3>
                  <div className=" flex gap-2 justify-center my-4">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/footer/icons/facebook.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8  "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/footer/icons/instagram.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/footer/icons/twitter.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/footer/icons/linkedin.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/footer/icons/youtube.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 "
                      />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-12 px-[10px]  footer_grid justify-center gap-y-10 gap-3 xl:gap-10 text-[14px] md:text-[16px] ">
                  <div className="col-span-12 md:col-span-4 lg:col-span-4">
                    <div className="">
                      <div className="footer-col">
                        <div className={styles.Footerlogo}>
                          <div>
                            <Image src="/images/logo/khm-logo-wht.png" alt="Sydney Container Logo" width={500} height={202} className="w-[100px] h-auto"/>
                          </div>
                        </div>
                        <h3 className={styles.footerTitle}>
                          About KHM Logistics
                        </h3>
                        <p>
                          From local deliveries to long-term storage, we provide
                          complete logistics support throughout Sydney with a focus
                          on reliability, speed, and customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <div className="footer-col">
                      <h3 className={styles.footerTitle}>Quick Links</h3>
                      <div className={styles.footerLinks}>
                        <ul className=" grid gap-3">
                        <li>
                            <Link href="/">
                            Home
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                            About
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/why-choose-us">
                            Why Choose Us
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                            Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-4 lg:col-span-3">
                    <div className="footer-col">
                      <h3 className={styles.footerTitle}>Services</h3>
                      <div className={styles.footerLinks}>
                        <ul className=" grid gap-3">
                          <li>
                            <Link href="/services/supply-chain">
                            Supply Chain
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/transloading-services">
                            Transloading Services
                            </Link>
                          </li>
                          <li>
                            <Link href="'/services/warehouse-services">
                            Warehouse Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/intermodal-services">
                            Intermodal Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/hazmat-services">
                            Hazmat Services
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>             
                  <div className="col-span-12 md:col-span-4 lg:col-span-2">
                    <div className="footer-col">
                      <h3 className={styles.footerTitle}>Contact</h3>
                      <div className={styles.footerLinks}>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-4">
                            <Image src="/images/footer/icons/pin.svg" alt="Address Icon" width={25} height={25}/>
                            <Link href="https://maps.google.com/?q=6+KILMER+ROAD+EDISON,+NJ+08820">6 KILMER ROAD EDISON, NJ 08820</Link>
                          </li>

                          <li className="flex items-center gap-4">
                            <Image src="/images/footer/icons/email.svg" alt="Email Icon" width={20} height={20}/>
                            <Link href="mailto:support@khmlogistics.com">support@khmlogistics.com</Link>
                          </li>

                          <li className="flex items-center gap-4">
                            <Image src="/images/footer/icons/phone.svg" alt="Phone Icon" width={20} height={20}/>
                            <Link href="tel:+1430960265">0430 960 265</Link>
                          </li>
                        </ul>
                      </div>
                    </div>                
                  </div>
                </div>
                <div className="footer-bottom border-t-[1px] mt-8 pt-4 md:pb-4">
                  <div className="md:flex justify-center items-center text-center">
                    <div className="text-[14px]">
                      ©{currentYear}{" "}
                      <span className={styles.footerLinks}>
                      KHM Logistics Website Development by {" "}
                        <Link
                          href="https://www.amrsoftec.com/"
                          className="text-[--secondary] hover:underline"
                        >
                          AMRsoftec
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
        </Container>
      </footer>
    </>
  );
}
