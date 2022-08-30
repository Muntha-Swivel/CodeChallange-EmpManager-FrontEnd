import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { default as BModal } from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { modalSelector } from "../../Store/modalSlice";
import { toggleModal } from "../../Store/modalSlice";
import { useDispatch } from "react-redux";
import { IModal } from "./ModalInterface";

const Modal = ({ header, message, confirmClick }: IModal) => {
  const dispatch: any = useDispatch();
  const content = useSelector(modalSelector());
  const modalState = content.modal;

  const handleClose = () => dispatch(toggleModal(false));

  return (
    <>
      <BModal show={modalState} onHide={handleClose}>
        <BModal.Header closeButton>
          <BModal.Title>{header}</BModal.Title>
        </BModal.Header>
        <BModal.Body>{message}</BModal.Body>
        <BModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmClick}>
            Confirm
          </Button>
        </BModal.Footer>
      </BModal>
    </>
  );
};

export default Modal;
