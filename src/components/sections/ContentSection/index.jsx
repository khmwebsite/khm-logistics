import Image from 'next/image';
import styles from './ContentSection.module.css';

export default function ContentSection({children}) {
  return (
    <div className={`${styles.ContentSection}`}>{children}</div>
  );
}
