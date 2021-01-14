import PropTypes from "prop-types";
import cn from "classnames";
import { Loading } from "../index";
import styles from "../../styles/button.module.scss";

export default function Button({
  title,
  variant,
  size,
  uppercase,
  loading,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        styles.element,
        styles[variant],
        styles[size],
        uppercase && styles[uppercase],
        className && className
      )}
      {...props}
    >
      {loading && (
        <div className={styles.loading}>
          <Loading size="sm" />
        </div>
      )}
      {title || children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  uppercase: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  uppercase: true,
  loading: false,
};
