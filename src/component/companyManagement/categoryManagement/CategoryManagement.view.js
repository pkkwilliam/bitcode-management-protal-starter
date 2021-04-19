import React from "react";
import ApplicationComponentView from "src/common/ApplicationComponentView";
import { CCard } from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import ApplicationTable from "src/common/ApplicationTable";

export const ID_COLUMN = { key: "id", label: "ID" };
export const ITEM_DETAIL_COLUMN = { key: "details", label: "" };
export const NAME_COLUMN = { key: "name", label: "類別" };

const COLUMNS = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "類別", dataIndex: "name", key: "name" },
];

export default function CategoryManagementView(props) {
  const { getCategoriesService } = props;
  return (
    <ApplicationComponentView {...props}>
      <CCard>
        <ApplicationTable
          columns={COLUMNS}
          dataServiceRequest={getCategoriesService}
          sortable
        />
      </CCard>
    </ApplicationComponentView>
  );
}
