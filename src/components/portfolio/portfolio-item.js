import PropTypes from "prop-types";
import cn from "classnames";
import moment from "moment";
import { Image, Text } from "../index";
import styles from "../../styles/portfolio.module.scss";

export default function PortfolioItem({
  title,
  date,
  image,
  className,
  children,
  ...props
}) {
  return (
    <div className={cn(styles.item, className && className)} {...props}>
      <div className={styles.image}>
        <Image src={image} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <Text size="tall">{moment(date).format("LL")}</Text>
          <Text as="h3" weight="bold" className="mt-4 mb-0">
            {title}
          </Text>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
};
