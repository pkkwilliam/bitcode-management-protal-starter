import React from "react";
import { Form, Select } from "antd";
import ApplicationEditForm from "src/common/ApplicationEditForm";
import ApplicationImageUploader from "../../common/ApplicationImageUploader";

export const CATEGORY_SELECT = { label: "分類", value: "category" };
export const ITEM_SELECT = { label: "產品", value: "item" };

export default function CompanyCustomiseImageUploaderView(props) {
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
        <TypeSelection {...props} />
      </Form.Item>
      <Form.Item label="點擊後轉到">
        <ObjectGenerate {...props} />
      </Form.Item>
    </ApplicationEditForm>
  );
}

export function TypeSelection(props) {
  const { selectedType, onChangeOptionType } = props;
  return (
    <Select
      onChange={(value) => onChangeOptionType(value)}
      options={[CATEGORY_SELECT, ITEM_SELECT]}
      value={selectedType}
    />
  );
}

export function ObjectGenerate(props) {
  const { objectSelected, onChangeObject, options } = props;
  const generateOptions = (options) =>
    options.map((option) => ({ value: option.id, label: option.name }));
  console.log(objectSelected);
  return (
    <Select
      disabled={options.length < 1}
      onChange={(value) => onChangeObject(value)}
      options={generateOptions(options)}
      value={objectSelected}
    />
  );
}
