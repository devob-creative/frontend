import PropTypes from "prop-types";
import cn from "classnames";
import { Image } from "../index";
import styles from "../../styles/presentation.module.scss";

export default function Presentation({ images, className }) {
  return (
    <section className={cn(styles.wrapper, className && className)}>
      {images?.map((item) => (
        <Image src={item.url} key={item.id} />
      ))}
    </section>
  );
}

Presentation.propTypes = {
  images: PropTypes.array,
};
