import PropTypes from "prop-types";
import cn from "classnames";
import { AnimatedButton } from "../index";
import { API_URI } from "../../constants";
import styles from "../../styles/carousel.module.scss";

export default function CarouselItem({
  title,
  image,
  actionTitle,
  actionUrl,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(styles.item, className && className)}
      style={{ backgroundImage: `url(${API_URI+image})` }}
      {...props}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        {actionTitle && (
          <a href={actionUrl}>
            <AnimatedButton title={actionTitle} />
          </a>
        )}
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  actionTitle: PropTypes.string,
  actionUrl: PropTypes.string,
  className: PropTypes.string,
};
