import React from "react";
import { Form, Input } from "antd";
import ApplicationEditForm from "src/common/ApplicationEditForm";
import ApplicationImageUploader from "../../../common/ApplicationImageUploader";
import {
  ObjectGenerate,
  TypeSelection,
} from "../companyCustomiseImageUploader/CompanyCustomiseImageUploader.view";

export const CATEGORY_SELECT = { label: "分類", value: "category" };
export const ITEM_SELECT = { label: "產品", value: "item" };

export default function CompanyCustomiseImageUploaderView(props) {
  const {
    isCreateView,
    onAddImage,
    onChangeName,
    onClickCancel,
    onClickSubmit,
    name,
    selectedType,
  } = props;
  return (
    <ApplicationEditForm
      deleteable
      header={"主頁按鈕"}
      onClickCancel={onClickCancel}
      onClickSubmit={onClickSubmit}
      {...props}
    >
      <Form.Item label="圖片">
        <ApplicationImageUploader maxFiles={1} onAddImage={onAddImage} />
      </Form.Item>
      <Form.Item label="按鈕標籤">
        <Input
          onChange={(event) => onChangeName(event.target.value)}
          value={name}
          {...props}
        />
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
