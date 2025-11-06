import { GiTruck } from "react-icons/gi";
import styles from './SectionTitle.module.css';

export default function SectionTitle({ subtitle, title, titlespan, content }) {
  return (
    <div className={styles.sectionTitleSection}>
        {subtitle ? <div className={`${styles.sectionSubTitle}`}>
            <div className={styles.line}></div>
            <div>{subtitle}</div>
            <div className={styles.icon}><GiTruck size={30} /></div>
        </div> : ""}
        <h2 className={styles.sectionHeading}>
            <span className={styles.titleSpan}>{titlespan}</span> {title}
        </h2>
        {content ? (
            <div className={styles.sectionTitleContent} dangerouslySetInnerHTML={{ __html: content }}></div>
        ) : (
            ""
        )}
    </div>
  );
}
