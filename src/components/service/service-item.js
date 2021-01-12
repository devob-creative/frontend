import React from "react";
import cn from "classnames";
import Icon from "../icon/icon";
import styles from "../../styles/service.module.scss";

export default function ServiceItem({ children, icon, className, ...props }) {
  return (
    <div className={cn(styles.item, className)} {...props}>
      <div className="d-flex align-items-start w-100">
        {icon && (
          <div className={styles.icon}>
            <Icon type="regular" name={icon} size="2x" />
          </div>
        )}
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
}
