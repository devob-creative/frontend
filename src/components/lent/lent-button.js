import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/lent.module.scss";

export default function LentButton({
  children,
  isActive,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        styles.button,
        isActive && styles.active,
        className && className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

LentButton.propTypes = {
  children: PropTypes.object,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};
