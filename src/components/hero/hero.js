import { Container, Text } from "../index";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "../../styles/hero.module.scss";

export default function Hero({ title, className, wide, children, ...props }) {
  return (
    <section
      className={cn(
        styles.wrapper,
        wide && styles.wide,
        className && className
      )}
      {...props}
    >
      <Container>
        <div className={styles.content}>
          {title ? (
            <Text as="h1" weight="bold" className={styles.title}>
              {title}
            </Text>
          ) : (
            children
          )}
        </div>
      </Container>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  wide: PropTypes.bool,
  children: PropTypes.object,
};

Hero.defaultProps = {
  wide: false,
};
