import React from "react";
import cn from "classnames";
import styles from "../../styles/service.module.scss";

function ServiceWrapper({ children, className, ...props }) {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
    </div>
  );
}

export default ServiceWrapper;
