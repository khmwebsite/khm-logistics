import styles from './ContainerFluid.module.css';

export default function ContainerFluid({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}
