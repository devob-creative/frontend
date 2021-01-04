import PropTypes from "prop-types";
import cn from "classnames";

export default function Container({ fluid, className, children, ...props }) {
  return (
    <div
      className={cn(
        fluid ? "container-fluid" : "container",
        className && className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  fluid: false,
};
