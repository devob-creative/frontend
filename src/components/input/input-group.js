import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/input.module.scss";

export default function InputGroup({ className, children, ...props }) {
  return (
    <div className={cn(styles.group, className && className)} {...props}>
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};
