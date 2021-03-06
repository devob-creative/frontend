import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/text.module.scss";
import {
  fontTypes,
  transformTypes,
  weightTypes,
  sizeTypes,
} from "../../types/text.type";

export default function Text({
  as,
  text,
  font,
  transform,
  weight,
  size,
  variant,
  className,
  children,
  ...props
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        styles.element,
        font && styles[fontTypes[font]],
        weight && styles[weightTypes[weight]],
        size && styles[sizeTypes[size]],
        variant && `text-${variant}`,
        transform && styles[transformTypes[transform]],
        className && className
      )}
      {...props}
    >
      {text || children}
    </Tag>
  );
}

Text.propTypes = {
  as: PropTypes.string,
  text: PropTypes.string,
  font: PropTypes.string,
  weight: PropTypes.string,
  variant: PropTypes.string,
  transform: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  as: "span",
};
