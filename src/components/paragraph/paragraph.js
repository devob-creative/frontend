import PropTypes from "prop-types";
import cn from "classnames";
import { Text } from "../index";
import styles from "../../styles/paragraph.module.scss";

export default function Paragraph({ title, children, className, ...props }) {
  return (
    <div className={cn(styles.element, className && className)} {...props}>
      <Text size="big" weight="bold" transform="uppercase">
        {title || children}
      </Text>
    </div>
  );
}

Paragraph.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
