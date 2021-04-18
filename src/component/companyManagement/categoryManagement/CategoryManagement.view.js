import React from "react";
import ApplicationComponentView from "src/common/ApplicationComponentView";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

export default function CategoryManagementView(props) {
  return (
    <ApplicationComponentView {...props}>
      <CCard>
        <CategoryTable {...props} />
      </CCard>
    </ApplicationComponentView>
  );
}

export function CategoryTable(props) {
  const { categories } = props;
  return <CDataTable items={categories} />;
}

export function ModifyButtonRow(props) {
  const { onClickAdd, onClickDelete, onClickEdit, onClickUpdate } = props;
}
