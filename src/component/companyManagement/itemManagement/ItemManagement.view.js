import React from "react";
import ApplicationTable, {
  AREA_COLUMN,
  CATEGORIES_TAGS_COLUMN,
  COST_COLUMN,
  ITEM_NAME_COLUMN,
  RE_LISTING_TYPE,
} from "src/common/ApplicationTable";
import ApplicationEditableTableContainer, {
  EditButtonRow,
  generateEditableColumns,
} from "src/common/ApplicationEditableTableContainer";

const COLUMNS = [
  ITEM_NAME_COLUMN,
  AREA_COLUMN,
  CATEGORIES_TAGS_COLUMN,
  RE_LISTING_TYPE,
  COST_COLUMN,
];

export default function ItemManagementView(props) {
  const { items, onClickAddRow, onClickRowEdit, setItemsState } = props;
  return (
    <ApplicationEditableTableContainer header={"產品管理"} {...props}>
      <EditButtonRow onClickAdd={onClickAddRow} />
      <ApplicationTable
        columns={generateEditableColumns(COLUMNS, onClickRowEdit)}
        dataSource={items}
        setDataSource={setItemsState}
        sortable
      />
    </ApplicationEditableTableContainer>
  );
}
