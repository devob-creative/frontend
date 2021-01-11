import cn from "classnames";
import styles from "../../styles/image.module.scss";
import { API_URI } from "../../constants";

export default function Image({ src, alt, className, ...props }) {
  const merged_src = API_URI + src;
  return (
    <img
      src={merged_src}
      className={cn(styles.element, className && className)}
      {...props}
    />
  );
}
