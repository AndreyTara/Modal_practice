import React from "react";
import Modal from "react-modal";
import css from "./CustomModal.module.css";

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.overlay}
      className={css.content}
      ariaHideApp={false}
    >
      <button
        className={css.closeBtn}
        type="button"
        onClick={() => {
          console.log("asdasdd");
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
