import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import ApplicationEditForm from "src/common/ApplicationEditForm";
import ApplicationImageUploader from "src/common/ApplicationImageUploader";

export const AREA_TEXTFIELD = "AREA_TEXTFIELD";
export const COST_TEXTFIELD = "COST_TEXTFIELD";
export const DESCRIPTION_TEXTFIELD = "DESCRIPTION_TEXTFIELD";
export const ITEM_NAME_TEXTFIELD = "ITEM_NAME_TEXTFIELD";

export default function ItemDetailView(props) {
  const {
    categories,
    item,
    isCreateView,
    onChangeTextfieldInput,
    onClickSubmit,
    onSelectedCategory,
  } = props;
  const { area, cost, description, name } = item;
  return (
    <ApplicationEditForm
      isCreateView={isCreateView}
      header={"產品"}
      onClickSubmit={onClickSubmit}
      {...props}
    >
      <Form.Item label="ID">
        <Input disabled value={item?.id ?? ""} />
      </Form.Item>
      <Form.Item label="產品名字">
        <Input
          placeholder="請輸入產品名字"
          onChange={(event) =>
            onChangeTextfieldInput(ITEM_NAME_TEXTFIELD, event)
          }
          value={name}
        />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item label="大小">
            <Input
              placeholder="請輸入單位大小"
              onChange={(event) =>
                onChangeTextfieldInput(AREA_TEXTFIELD, event)
              }
              value={area}
            />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item label="價格">
            <Input
              placeholder="請輸入單位價格"
              onChange={(event) =>
                onChangeTextfieldInput(COST_TEXTFIELD, event)
              }
              value={cost}
            />
          </Form.Item>
          <MultipleSelectOption
            categories={categories}
            item={item}
            onSelectedCategory={onSelectedCategory}
          />
        </Col>
      </Row>
      <Form.Item label="描述">
        <Input.TextArea
          placeholder="單位描述"
          onChange={(event) =>
            onChangeTextfieldInput(DESCRIPTION_TEXTFIELD, event)
          }
          value={description}
        />
      </Form.Item>
      <Form.Item label="圖片">
        <ApplicationImageUploader />
      </Form.Item>
    </ApplicationEditForm>
  );
}

export function MultipleSelectOption({ categories, item, onSelectedCategory }) {
  const values = item.categories.map((category) => category.id);
  const options = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <Form.Item label="分類(可多選)">
      <Select
        mode="multiple"
        onChange={(value) => {
          onSelectedCategory(value);
        }}
        options={options}
        placeholder="請至少選擇一個分類"
        value={values}
      />
    </Form.Item>
  );
}
