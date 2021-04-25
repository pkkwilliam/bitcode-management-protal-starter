import React from "react";
import { Image, Table } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { CIcon } from "@coreui/icons-react";
import ApplicationComponent from "./ApplicationComponent";

export const AREA_COLUMN = {
  title: "大小",
  dataIndex: "area",
  key: "area",
};
export const CATEGORY_COLUMN = {
  title: "分類",
  dataIndex: "name",
  key: "name",
};
export const CATEGORIES_TAGS_COLUMN = {
  title: "分類",
  dataIndex: "categoriesTags",
  key: "categoriesTags",
};
export const COST_COLUMN = {
  title: "價格",
  dataIndex: "cost",
  key: "cost",
};
export const DESCRIPTION_COLUMN = {
  title: "描述",
  dataIndex: "description",
  key: "description",
};
export const IMAGE_COLUMN = {
  title: "",
  dataIndex: "url",
  key: "url",
  render: (url) => <Image src={url} style={{ width: 150 }} />,
};
export const ITEM_NAME_COLUMN = {
  title: "名字",
  dataIndex: "name",
  key: "name",
};
export const TYPE_COLUMN = {
  title: "類別",
  dataIndex: "type",
  key: "type",
};

export const ID_COLUMN = { title: "ID", dataIndex: "id", key: "id" };

export default class ApplicationTable extends ApplicationComponent {
  render() {
    const { columns, dataSource, editable, sortable } = this.props;
    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={generateTableColumns(columns, sortable, editable)}
        rowKey="sequence"
        components={{
          body: {
            wrapper: this.DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource, setDataSource } = this.props;
    if (oldIndex !== newIndex) {
      let newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(
        (el) => !!el
      );
      newData = newData.map((data, index) => {
        let update = { ...data, sequence: index };
        return update;
      });
      // true mean is sequence changes
      setDataSource(newData, true);
    }
  };

  DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.props;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.sequence === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };
}

function generateTableColumns(columns, sortable, editable) {
  if (sortable) {
    columns = [
      {
        title: "順序",
        dataIndex: "sort",
        width: 90,
        className: "drag-visible",
        render: () => <DragHandle />,
      },
      ...columns,
    ];
  }
  return columns;
}

export function generateFirstTimeSortableDataSource(dataSource) {
  return dataSource.sort((data1, data2) => data1.sequence - data2.sequence);
}

const DragHandle = sortableHandle(() => (
  <CIcon name="cil-list" size="lg" style={{ color: "#999" }} />
));

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);
