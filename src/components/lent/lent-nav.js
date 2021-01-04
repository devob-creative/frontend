import styles from "../../styles/lent.module.scss";

export default function LentNav({ children, ...props }) {
  return (
    <ul className={styles.nav} {...props}>
      {children}
    </ul>
  );
}
