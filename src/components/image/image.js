import cn from "classnames";
import styles from "../../styles/image.module.scss";

export default function Image({ src, className, ...props }) {
  return (
    <img
      src={src}
      className={cn(styles.element, className && className)}
      {...props}
    />
  );
}
