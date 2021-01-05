import { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "../../styles/modal.module.scss";

export default function Modal({
  isOpen,
  fullscreen,
  children,
  onRequestClose,
  ...props
}) {
  const modalRef = useRef(null);

  const handleClickOutside = (elem) => {
    if (elem.target.contains(modalRef.current)) {
      onRequestClose();
    }
  };

  const keyDownWrapper = useCallback((e) => {
    if (e.key === "Escape") {
      onRequestClose();
    }
  });

  useEffect(() => {
    window.addEventListener("keyup", keyDownWrapper);
    return () => {
      window.removeEventListener("keyup", keyDownWrapper);
    };
  });

  return (
    <div
      ref={modalRef}
      onClick={handleClickOutside}
      className={cn(
        styles.wrapper,
        isOpen && styles.open,
        fullscreen && styles.fullscreen
      )}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  fullscreen: PropTypes.bool,
  children: PropTypes.object,
  onRequestClose: PropTypes.func,
};
