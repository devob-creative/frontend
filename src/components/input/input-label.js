import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/input.module.scss";

export default function InputLabel({ title, className, children, ...props }) {
  return (
    <label className={cn(styles.label, className && className)} {...props}>
      {title || children}
    </label>
  );
}

InputLabel.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
};
