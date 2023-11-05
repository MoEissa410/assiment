"use client";
import React from "react";
import BackDrop from "./BackDrop";
import ModalDialog from "./ModalDialog";

const Modal = () => {
  return (
    <BackDrop>
      <ModalDialog />
    </BackDrop>
  );
};

export default Modal;
