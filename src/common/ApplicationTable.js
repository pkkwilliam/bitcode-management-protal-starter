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
  state = {
    dataSource: [],
  };

  componentDidMount() {
    const { dataServiceRequest } = this.props;
    dataServiceRequest().then((dataSource) => {
      this.setState({ dataSource: generateDataSource(dataSource) });
    });
  }

  render() {
    const { columns, editable, sortable } = this.props;
    const { dataSource } = this.state;
    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={generateTableColumns(columns, sortable, editable)}
        rowKey="index"
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
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      this.setState({ dataSource: newData });
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
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
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

// TODO need index from server in sortable data
function generateDataSource(rows) {
  return rows.map((row, index) => ({ ...row, key: index + 1, index: index }));
}

const DragHandle = sortableHandle(() => (
  <CIcon name="cil-list" size="lg" style={{ color: "#999" }} />
));

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);
