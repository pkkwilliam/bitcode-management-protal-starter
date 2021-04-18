import React from "react";
import { CModal, CModalBody, CModalHeader } from "@coreui/react";

export default function ApplicationComponentView(props) {
  const { children } = props;
  return (
    <>
      <ApplicationErrorModal {...props} />
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
