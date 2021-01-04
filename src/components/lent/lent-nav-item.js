import styles from "../../styles/lent.module.scss";

export default function LentNavItem({ children, title, url, ...props }) {
  return (
    <li className={styles.navItem} {...props}>
      <a href={url} target="_blank" rel="noopener">
        {title || children}
      </a>
    </li>
  );
}
