import cn from "classnames";
import styles from "../../styles/loading.module.scss";

export default function Loading({ size, variant, className, ...props }) {
  return (
    <div
      className={cn(
        styles.loading,
        styles[`loading-${size}`],
        styles[`loading-${variant}`],
        className && className
      )}
      {...props}
    />
  );
}

Loading.defaultProps = {
  size: "md",
  variant: "secondary",
};
