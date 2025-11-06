"use client";
import styles from './Header.module.css';
import { useState, useEffect } from "react";
import {  usePathname } from "next/navigation";
import Link from "next/link";
import useSticky from '@/components/hooks/use-sticky';
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Button from '@/components/ui/BtnBorder';
import Logo from '@/components/svg/Logo';
import LogoWhite from '@/components/svg/LogoWhite';
import Btn from '@/components/ui/BtnBorder';
import Image from 'next/image';
import Container from '../Container';

export default function Header() {
  const { sticky } = useSticky();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

const Navigation = [
    { 
      title: 'Home', 
      linkSource:'/',      
    },

    {
      title: 'About Us', 
      linkSource:'/about',
     
    },
    { 
      title: 'Services',
      linkSource:'/services',
      items: [
        { label: 'Supply Chain', href: '/services/supply-chain' },
        { label: 'Transloading Services', href: '/services/transloading-services' },
        { label: 'Warehouse Services', href: '/services/warehouse-services' },
        { label: 'Intermodal Services', href: '/services/intermodal-services' },
        { label: 'Hazmat Services', href: '/services/hazmat-services' }
      ] 
    },
    { 
      title: 'Why Choose Us', 
      linkSource:'/why-choose-us' 
    },
    { 
        title: 'Contact Us', 
        linkSource:'/contact' 
      },
  ]; 

  return (
    <>
    <header className={`${styles.headerContainer} ${sticky ? styles.headerSticky : ""}`}>
           <Container>
           <div className={styles.navbar}>
                <div className={styles.navbarLogo}>
                    <Link href="/" title="Container Transport Companies Sydney" className="text-black ">
                        <Image src="/images/logo/logo-final.png" alt="Sydney Container Logo" width={500} height={202} className="w-[80px] h-auto"/>
                    </Link>
                </div>
                <div className='hidden xl:flex'>
                    <ul className={styles.Navigation}>
                        {Navigation.map((Menu, list) => (
                            <li className={styles.NavigationLi} key={list}>
                                <Link alt="" href={Menu.linkSource} className={styles.NavigationLink}>{Menu.title}</Link>
                                {Menu.items && Menu.items.length > 0 && (
                                   <ul className={`${styles.SubNav} space-y-3`}>
                                        {Menu.items.map((item, index) => (
                                            <li key={index} className={styles.SubNavItem}>
                                                <Link href={item.href} className={styles.SubNavItemLink}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li className={styles.NavigationLi}>
                            <Link href="/contact" className='btn'>
                                <span>Get a Quote</span>
                            </Link>
                        </li>
                    </ul>
                </div>
               <button className={`${styles.MobileMenuBtn} block xl:hidden`} onClick={() => setIsMenuOpen(true)}>
                    <span className={styles.MobileMenuBox}>
						<span className={`${styles.Hamburger} ${styles.one}`}></span>
						<span className={`${styles.Hamburger} ${styles.two}`}></span>
						<span className={`${styles.Hamburger} ${styles.three}`}></span>
					</span>
                </button>
              
            </div>
           </Container>
    </header>
    <div className={`${styles.MobileMenu} ${isMenuOpen ? styles.open : styles.closed}`}>
        <div>
            <div className={`${styles.MobileMenuHeader}`}>
                <div className={styles.navbarLogo}>
                    <Link href="/" title="Container Transport Companies Sydney" className="text-black">
                     <Image src="/images/logo/logo-final.png" alt="Sydney Container Logo" width={500} height={202} className="w-[80px] h-auto"/>
                    </Link>
                </div>
                <div className={styles.MobileMenuClose} onClick={() => setIsMenuOpen(false)}><CgClose/></div>
            </div>
            <ul className={`${styles.MobileNav}`}>
                {Navigation.map((Menu, list) => (
                    <li key={list}>
                        <Link alt="" href={Menu.linkSource}>{Menu.title}</Link>
                        {Menu.items && Menu.items.length > 0 && (
                            <ul>
                                {Menu.items.map((item, index) => (
                                    <li key={index} >
                                        <Link href={item.href} >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex justify-center gap-4 p-4">           
            <Link href="/contact-us" className='btn'>
                <span>Get a Quote</span>
            </Link>
        </div>
    </div>
    </>
  );
}
