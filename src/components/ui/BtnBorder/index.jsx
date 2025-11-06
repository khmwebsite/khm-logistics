import Link from "next/link";
import styles from './BtnBorder.module.css';
export default function BtnBorder ({ href, name, className }) {
  return (
    <Link href={href} className={`${styles.Btn} ${className === "Primary" ? styles.Primary : ""}`}>
        <span className={styles.TopKey}></span>
        <span className={styles.BtnTxt}>{name}</span>
        <span className={styles.BottomKey1}></span>
        <span className={styles.BottomKey2}></span>
    </Link>
  );
};
