import React from "react";
import { Form } from "antd";
import ApplicationEditForm from "../../../common/ApplicationEditForm";
import {
  ObjectGenerate,
  TypeSelection,
} from "../companyCustomiseImageUploader/CompanyCustomiseImageUploader.view";
import ApplicationImageUploader from "../../../common/ApplicationImageUploader";

export default function CompanyCustomiseBottomListView(props) {
  const {
    isCreateView,
    onClickCancel,
    onClickDelete,
    onClickSubmit,
    selectedType,
  } = props;
  return (
    <ApplicationEditForm
      isCreateView={isCreateView}
      header={"旋轉圖片"}
      onClickCancel={onClickCancel}
      onClickDelete={onClickDelete}
      onClickSubmit={onClickSubmit}
      {...props}
    >
      <Form.Item label="圖片">
        <ApplicationImageUploader maxFiles={1} />
      </Form.Item>
      <Form.Item label="點擊類型">
        <TypeSelection disabled {...props} />
      </Form.Item>
      <Form.Item label="點擊後轉到">
        <ObjectGenerate {...props} />
      </Form.Item>
    </ApplicationEditForm>
  );
}
