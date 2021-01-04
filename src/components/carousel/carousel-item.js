import PropTypes from "prop-types";
import cn from "classnames";
import { Button } from "../index";
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
      style={{ backgroundImage: `url(${image})` }}
      {...props}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        {actionTitle && (
          <a href={actionUrl}>
            <Button title={actionTitle} />
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
