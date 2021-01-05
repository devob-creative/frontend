import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/input.module.scss";

export default function InputControl({
  as,
  type,
  placeholder,
  className,
  children,
  ...props
}) {
  const Element = as;
  return (
    <Element
      type={type}
      className={cn(styles.control, className && className)}
      placeholder={placeholder}
      {...props}
    />
  );
}

InputControl.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
};

InputControl.defaultProps = {
  as: "input",
  type: "text",
  placeholder: " ",
};
