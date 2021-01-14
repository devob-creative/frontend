import Link from "next/link";
import cn from "classnames";
import { Brand, Container } from "../";
import styles from "../../styles/navbar.module.scss";
import { NAV_LIST } from "../../constants";

export default function Navbar({ className, ...props }) {
  return (
    <nav
      className={cn(styles.wrapper, styles.narrow, className && className)}
      {...props}
    >
      <Container>
        <div className={styles.content}>
          <Link href="/">
            <a aria-label="Home">
              <Brand />
            </a>
          </Link>
          <ul className={styles.nav}>
            {NAV_LIST.map((i) => (
              <li key={i.title}>
                <Link href={i.url}>
                  <a>{i.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
