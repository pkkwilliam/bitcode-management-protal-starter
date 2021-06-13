import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React from "react";
import ApplicationLoadableButton from "../../../common/ApplicationLoadableButton";
import ApplicationComponentView from "../../../common/ApplicationComponentView";
import { Col, Form, Input, Row } from "antd";
import ApplicationTable, {
  IMAGE_COLUMN,
  ITEM_NAME_COLUMN,
  TYPE_COLUMN,
} from "../../../common/ApplicationTable";
import ApplicationEditableTableContainer, {
  EditButtonRow,
  generateEditableColumns,
} from "../../../common/ApplicationEditableTableContainer";

const BOTTOM_LIST_COLUMN = [TYPE_COLUMN];
const CAROUSEL_COLUMNS = [IMAGE_COLUMN, ITEM_NAME_COLUMN, TYPE_COLUMN];
const MAIN_BUTTONS_COLUMNS = [IMAGE_COLUMN, ITEM_NAME_COLUMN, TYPE_COLUMN];

export default function CompanyCustomiseView(props) {
  return (
    <ApplicationComponentView {...props}>
      <Theme {...props} />
      <LandingPageCarousel {...props} />
      <LandingPageMainMenuButtons {...props} />
      <LandingPageBottomList {...props} />
    </ApplicationComponentView>
  );
}

function LandingPageBottomList(props) {
  let { companyCustomise, onClickAddBottomList, onClickEditBottomList } = props;
  let { bottomList } = companyCustomise.landingPage;

  return (
    <ApplicationEditableTableContainer header="首頁-主頁底表" {...props}>
      <EditButtonRow onClickAdd={onClickAddBottomList} />
      <ApplicationTable
        columns={generateEditableColumns(
          BOTTOM_LIST_COLUMN,
          onClickEditBottomList
        )}
        dataSource={bottomList}
        setDataSource={() => console.log("please create this function")}
      />
    </ApplicationEditableTableContainer>
  );
}

function LandingPageCarousel(props) {
  let { companyCustomise, onClickAddCarouselImage, onClickEditCarouselImage } =
    props;
  let { carousel } = companyCustomise.landingPage;

  return (
    <ApplicationEditableTableContainer header="首頁-旋轉圖片" {...props}>
      <EditButtonRow onClickAdd={onClickAddCarouselImage} />
      <ApplicationTable
        columns={generateEditableColumns(
          CAROUSEL_COLUMNS,
          onClickEditCarouselImage
        )}
        dataSource={carousel}
        setDataSource={() => console.log("please create this function")}
      />
    </ApplicationEditableTableContainer>
  );
}

function LandingPageMainMenuButtons(props) {
  const { companyCustomise, onClickEditMainMenuButton } = props;
  const { mainMenuButtons } = companyCustomise.landingPage;
  return (
    <ApplicationEditableTableContainer header="首頁-主頁按鈕" {...props}>
      <ApplicationTable
        columns={generateEditableColumns(
          MAIN_BUTTONS_COLUMNS,
          onClickEditMainMenuButton
        )}
        dataSource={mainMenuButtons}
        setDataSource={() => console.log("please create this function")}
      />
    </ApplicationEditableTableContainer>
  );
}

function Theme(props) {
  let {
    companyCustomise,
    onChangeCompanyCustomise,
    onClickUpdateCompanyCustomise,
  } = props;
  let { style } = companyCustomise;
  return (
    <SectionSubmitionCard
      header="公司主題"
      onClickSubmit={onClickUpdateCompanyCustomise}
      {...props}
    >
      <Row justify="space-between">
        <Col span={10}>
          <Form.Item label="主色調" style={{ backgroundColor: style.primary }}>
            <Input
              placeholder="#51A0D5"
              onChange={(event) => {
                style.primary = event.target.value;
                companyCustomise.style = style;
                onChangeCompanyCustomise(companyCustomise);
              }}
              value={style.primary}
            />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            label="副色調"
            style={{ backgroundColor: style.secondary }}
          >
            <Input
              placeholder="#78C5EF"
              onChange={(event) => {
                style.secondary = event.target.value;
                companyCustomise.style = style;
                onChangeCompanyCustomise(companyCustomise);
              }}
              value={style.secondary}
            />
          </Form.Item>
        </Col>
      </Row>
    </SectionSubmitionCard>
  );
}

function SectionSubmitionCard(props) {
  const { children, header, loading, onClickSubmit } = props;
  return (
    <CCard>
      <CCardHeader>{header}</CCardHeader>
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
              修改
            </ApplicationLoadableButton>
          </Form.Item>
        </Form>
      </CCardBody>
    </CCard>
  );
}
