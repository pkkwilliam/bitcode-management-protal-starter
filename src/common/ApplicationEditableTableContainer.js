import React from "react";
import ApplicationComponentView from "./ApplicationComponentView";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import ApplicationTextButton from "./ApplicationTextButton";
import { Button } from "antd";

export default function ApplicationEditableTableContainer(props) {
  const { header, children } = props;
  return (
    <ApplicationComponentView {...props}>
      <CCard>
        <CCardHeader>{header}</CCardHeader>
        <CCardBody>{children}</CCardBody>
      </CCard>
    </ApplicationComponentView>
  );
}

export function EditButtonRow({ onClickAdd }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <Button onClick={onClickAdd} type="primary">
        新增
      </Button>
    </div>
  );
}

export function generateEditableColumns(columns, onClick) {
  return [
    ...columns,
    {
      title: "操作",
      key: "action",
      render: (row) => {
        return (
          <ApplicationTextButton
            onClick={() => onClick(row)}
            style={{ border: 0, padding: 0 }}
          >
            修改
          </ApplicationTextButton>
        );
      },
    },
  ];
}
