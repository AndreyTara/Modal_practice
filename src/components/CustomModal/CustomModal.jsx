import React from "react";
import Modal from "react-modal";
import css from "./CustomModal.module.css";
import "./Modal.css";
const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.overlay}
      className={css.content}
      ariaHideApp={false}
      onRequestClose={() => onClose()}
      closeTimeoutMS={300}
    >
      <button
        className={css.closeBtn}
        type="button"
        onClick={() => {
          onClose();
        }}
      >
        x
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;
//  <div className={s.wrapper} onClick={handleBackdropClick}>
//    <div className={s.content}>
//      <button onClick={handleClick} className={s.closeBtn}>
//        ×
//      </button>
//      {children}
//    </div>
//  </div>;
