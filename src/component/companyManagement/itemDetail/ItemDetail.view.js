import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import ApplicationEditForm from "../../../common/ApplicationEditForm";
import ApplicationEditableImageList from "../../../common/ApplicationEditableImageList";

export const AREA_TEXTFIELD = "AREA_TEXTFIELD";
export const COST_TEXTFIELD = "COST_TEXTFIELD";
export const DESCRIPTION_TEXTFIELD = "DESCRIPTION_TEXTFIELD";
export const ITEM_NAME_TEXTFIELD = "ITEM_NAME_TEXTFIELD";
export const RS_ADDRESS_TEXTFIELD = "RS_ADDRESS_TEXTFIELD";
export const RS_RESTROOM_TEXTFIELD = "RS_RESTROOM_TEXTFIELD";
export const RS_ROOM_TEXTFIELD = "RS_ROOM_TEXTFIELD";
export const RS_LIVING_ROOM_TEXTFIELD = "RS_LIVING_ROOM_TEXTFIELD";

export default function ItemDetailView(props) {
  const {
    categories,
    item,
    isCreateView,
    onChangeTextfieldInput,
    onClickSubmit,
    onAddImage,
    onRemoveImage,
    onSelectedCategory,
    onSelectedListingType,
  } = props;
  const {
    address,
    area,
    cost,
    description,
    imageUrls,
    livingRoom,
    name,
    restroom,
    room,
  } = item;
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
      <Row>
        <Col span={24}>
          <Form.Item label="地址">
            <Input
              placeholder="請輸入單位地址"
              onChange={(event) =>
                onChangeTextfieldInput(RS_ADDRESS_TEXTFIELD, event)
              }
              value={address}
            />
          </Form.Item>
        </Col>
      </Row>
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
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={11}>
          <ListingTypeSelect
            onSelectedListingType={onSelectedListingType}
            item={item}
          />
        </Col>
        <Col span={11}>
          <MultipleSelectOption
            categories={categories}
            item={item}
            onSelectedCategory={onSelectedCategory}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={7}>
          <Form.Item label="房間數">
            <Input
              placeholder="請輸入房間數"
              onChange={(event) =>
                onChangeTextfieldInput(RS_ROOM_TEXTFIELD, event)
              }
              value={room}
            />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="廳數">
            <Input
              placeholder="請輸入廳數"
              onChange={(event) =>
                onChangeTextfieldInput(RS_LIVING_ROOM_TEXTFIELD, event)
              }
              value={livingRoom}
            />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="衛浴數">
            <Input
              placeholder="請輸入衛浴數"
              onChange={(event) =>
                onChangeTextfieldInput(RS_RESTROOM_TEXTFIELD, event)
              }
              value={restroom}
            />
          </Form.Item>
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
        <ApplicationEditableImageList
          imageUrls={imageUrls}
          onAddImage={onAddImage}
          onRemoveImage={onRemoveImage}
        />
      </Form.Item>
    </ApplicationEditForm>
  );
}

export function ListingTypeSelect({ item, onSelectedListingType }) {
  const options = [
    { value: "RENT", label: "出租" },
    { value: "SELL", label: "買賣" },
  ];
  return (
    <Form.Item label="交易類型">
      <Select
        onChange={onSelectedListingType}
        options={options}
        value={item?.listingType ?? ""}
      />
    </Form.Item>
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
