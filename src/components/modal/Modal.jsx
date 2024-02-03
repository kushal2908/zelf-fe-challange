import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Button from "../button/Button";

export default function Modal({ show, children, title, onClose, size }) {
  const dialogueRef = useRef(null);

  useEffect(() => {
    if (show) {
      dialogueRef.current.classList.add(styles.visible);
    } else {
      dialogueRef.current.classList.remove(styles.visible);
    }
  }, [show]);

  let dialogueStyle = {
    display: show ? "block" : "none",
  };
  return (
    <div>
      <div
        ref={dialogueRef}
        className={styles.dialogue}
        style={dialogueStyle}
        onClick={onClose}
      >
        <div className={styles.dialogueBody}>
          <div
            className={styles.dialogueContent}
            onClick={(e) => {
              e.stopPropagation(); // Do not close the modal if its clicked inside modal-body
            }}
          >
            <div className={styles.dialogueHead}>
              {title && <h5 className="mb-0">{title}</h5>}
              {/* <Button onClick={onClose}>&#10006;</Button> */}
            </div>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
