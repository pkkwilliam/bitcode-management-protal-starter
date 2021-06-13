import React from "react";
import { Form, Input } from "antd";
import ApplicationEditForm from "../../../common/ApplicationEditForm";

export default function CategoryDetailView(props) {
  const { category, isCreateView, onChangeCategoryName, onClickSubmit } = props;
  return (
    <ApplicationEditForm
      isCreateView={isCreateView}
      header={"分類"}
      onClickSubmit={onClickSubmit}
      {...props}
    >
      <Form.Item label="ID">
        <Input disabled value={category?.id ?? ""} />
      </Form.Item>
      <Form.Item label="分類名字">
        <Input
          placeholder="請輸入分類名字"
          onChange={(event) => onChangeCategoryName(event.target.value)}
          value={category?.name ?? ""}
        />
      </Form.Item>
    </ApplicationEditForm>
  );
}
