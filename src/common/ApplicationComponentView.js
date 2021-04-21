import React from "react";
import { CModal, CModalBody, CModalHeader } from "@coreui/react";
import ApplicationToast from "./ApplicationToast";

export default function ApplicationComponentView(props) {
  const { children, modal, toasts } = props;
  return (
    <>
      <ApplicationErrorModal modal={modal} />
      <ApplicationToast toasts={toasts} />
      {children}
    </>
  );
}

export function ApplicationErrorModal(props) {
  const { modal, onCloseErrorModal } = props;
  const { body, header, show } = modal;
  return (
    <CModal show={show} color="warning" onClose={onCloseErrorModal}>
      <CModalHeader closeButton>{header}</CModalHeader>
      <CModalBody>{body}</CModalBody>
    </CModal>
  );
}
