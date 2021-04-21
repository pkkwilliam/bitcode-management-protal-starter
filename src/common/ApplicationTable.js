import React from "react";
import { Table } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { CIcon } from "@coreui/icons-react";
import ApplicationComponent from "./ApplicationComponent";

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
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      setDataSource(newData);
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

const DragHandle = sortableHandle(() => (
  <CIcon name="cil-list" size="lg" style={{ color: "#999" }} />
));

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);
