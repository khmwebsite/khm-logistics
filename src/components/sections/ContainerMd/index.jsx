import styles from './Container.module.css';

export default function ContainerMd({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}
