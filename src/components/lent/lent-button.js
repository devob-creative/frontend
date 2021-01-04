import styles from "../../styles/lent.module.scss";

export default function LentButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
