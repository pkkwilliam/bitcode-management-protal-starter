import React from "react";
import ApplicationTable, {
  CATEGORY_COLUMN,
  ID_COLUMN,
} from "src/common/ApplicationTable";
import ApplicationEditableTableContainer, {
  EditButtonRow,
  generateEditableColumns,
} from "src/common/ApplicationEditableTableContainer";

const COLUMNS = [CATEGORY_COLUMN, ID_COLUMN];

export default function CategoryManagementView(props) {
  const {
    categories,
    onClickAddRow,
    onClickRowEdit,
    setCategoriesState,
  } = props;
  return (
    <ApplicationEditableTableContainer header={"分類管理"} {...props}>
      <EditButtonRow onClickAdd={onClickAddRow} />
      <ApplicationTable
        columns={generateEditableColumns(COLUMNS, onClickRowEdit)}
        dataSource={categories}
        setDataSource={setCategoriesState}
        sortable
      />
    </ApplicationEditableTableContainer>
  );
}
