import React from "react";
import ApplicationComponentView from "./ApplicationComponentView";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Form } from "antd";
import ApplicationLoadableButton from "./ApplicationLoadableButton";

export default function ApplicationEditForm(props) {
  const {
    children,
    loading,
    header,
    isCreateView,
    onClickCancel,
    onClickDelete,
    onClickSubmit,
  } = props;
  const fromPurpose = isCreateView ? "新增" : "修改";
  return (
    <ApplicationComponentView {...props}>
      <CCard>
        <CCardHeader>
          {fromPurpose}
          {header}
        </CCardHeader>
        <CCardBody>
          <Form layout="vertical">
            {children}
            <Form.Item>
              <ApplicationLoadableButton
                block
                loading={loading}
                onClick={onClickSubmit}
                type="primary"
              >
                {fromPurpose}
              </ApplicationLoadableButton>
            </Form.Item>
            <Form.Item>
              <ApplicationLoadableButton
                block
                disabled={isCreateView}
                loading={loading}
                onClick={onClickDelete}
                type="danger"
              >
                删除
              </ApplicationLoadableButton>
            </Form.Item>
            <Form.Item>
              <ApplicationLoadableButton
                block
                onClick={onClickCancel}
                type="link"
              >
                {`取消${fromPurpose}`}
              </ApplicationLoadableButton>
            </Form.Item>
          </Form>
        </CCardBody>
      </CCard>
    </ApplicationComponentView>
  );
}
