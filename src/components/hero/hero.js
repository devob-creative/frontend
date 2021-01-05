import { Container, Text } from "../index";
import cn from "classnames";
import styles from "../../styles/hero.module.scss";

function Hero({ title, className, ...props }) {
  return (
    <section className={cn(styles.wrapper, className && className)} {...props}>
      <Container>
        <div className={styles.content}>
          <Text as="h1" weight="bold" className={styles.title}>
            {title}
          </Text>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
