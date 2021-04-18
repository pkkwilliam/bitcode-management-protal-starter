import React, { useState } from "react";
import ApplicationComponentView from "src/common/ApplicationComponentView";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CRow,
} from "@coreui/react";

export const ID_COLUMN = { key: "id", label: "ID" };
export const ITEM_DETAIL_COLUMN = { key: "details", label: "" };
export const NAME_COLUMN = { key: "name", label: "類別" };

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
  const [showDetailId, setShowDetailId] = useState(0);
  const { categories } = props;
  return (
    <CDataTable
      items={categories}
      fields={[ID_COLUMN, NAME_COLUMN, ITEM_DETAIL_COLUMN]}
      scopedSlots={{
        details: (category, index) => {
          return (
            <CCollapse show={showDetailId === category.id}>
              <CCardBody></CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
}

export function ModifyButtonRow(props) {
  const { onClickAdd, onClickDelete, onClickEdit, onClickUpdate } = props;
}
