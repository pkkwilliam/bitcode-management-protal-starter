import React from "react";
import { CToast, CToastBody, CToastHeader, CToaster } from "@coreui/react";

export default function ApplicationToast(props) {
  const { toasts } = props;

  return (
    <>
      <CToaster position={"top-right"}>
        {toasts.map((toast, index) => {
          const { body, header } = toast;
          return (
            <CToast key={"toast" + index} show={true} autohide={5000} fade>
              <CToastHeader closeButton style={{ backgroundColor: "yellow" }}>
                {header}
              </CToastHeader>
              <CToastBody>{body}</CToastBody>
            </CToast>
          );
        })}
      </CToaster>
    </>
  );
}
