import React from "react";
import ApplicationTable from "src/common/ApplicationTable";
import ApplicationEditableTableContainer, {
  EditButtonRow,
  generateEditableColumns,
} from "src/common/ApplicationEditableTableContainer";

const COLUMNS = [
  { title: "類別", dataIndex: "name", key: "name" },
  { title: "ID", dataIndex: "id", key: "id" },
];

export default function CategoryManagementView(props) {
  const { getCategoriesServiceRequest, onClickAddRow, onClickRow } = props;
  return (
    <ApplicationEditableTableContainer header={"分類管理"} {...props}>
      <EditButtonRow onClickAdd={onClickAddRow} />
      <ApplicationTable
        columns={generateEditableColumns(COLUMNS, onClickRow)}
        dataServiceRequest={getCategoriesServiceRequest}
        sortable
      />
    </ApplicationEditableTableContainer>
  );
}
