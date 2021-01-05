import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/button.module.scss";

export default function Button({
  title,
  variant,
  size,
  uppercase,
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
      {title || children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  uppercase: true,
};
