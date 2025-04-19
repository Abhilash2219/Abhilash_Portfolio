import React from "react";


const Modal = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <iframe
          src={resumeUrl}
          width="100%"
          height="600px"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
