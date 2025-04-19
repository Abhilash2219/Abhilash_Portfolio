import React from "react";
import styles from "@/styles/modal.module.css"; // ✅ Import the module CSS

const Modal = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <iframe
          src={resumeUrl}
          width="100%"
          height="600px"
          title="Resume"
          className={styles.iframeStyle} // ✅ optional iframe styling
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
