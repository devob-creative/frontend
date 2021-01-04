import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/button.module.scss";

export default function Button({
  title,
  variant,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(styles.btn, styles[variant], className && className)}
      label={title}
      {...props}
    >
      {title || children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};
