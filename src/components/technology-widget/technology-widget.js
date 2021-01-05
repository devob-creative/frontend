import { Icon, Text } from "../index";
import cn from "classnames";
import styles from "../../styles/technology-widget.module.scss";

export default function TechnologyWidget({
  title,
  icon,
  type,
  className,
  ...props
}) {
  return (
    <div className={cn(styles.element, className && className)} {...props}>
      <Icon type={type} name={icon} size="3x" />
      <Text text={title} as="span" weight="semibold" size="large" />
    </div>
  );
}

TechnologyWidget.defaultProps = {
  type: "brands",
};
