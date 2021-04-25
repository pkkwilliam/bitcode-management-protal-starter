import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import ItemManagementView from "./ItemManagement.view";
import { UPDATE_ITEMS_SEQUENCES } from "../../../service/service";
import { ITEM_DETAIL } from "src/routes/ApplicationRoutes";
import { generateFirstTimeSortableDataSource } from "../../../common/ApplicationTable";

export default class ItemManagement extends ApplicationComponent {
  state = {
    ...this.state,
    items: [],
  };

  componentDidMount() {
    super.componentDidMount();
    this.getItems();
  }

  render() {
    return (
      <ItemManagementView
        onClickAddRow={this.onClickAddRow}
        onClickRowEdit={this.onClickRowEdit}
        setItemsState={this.setItemsState}
        {...this.state}
      />
    );
  }

  getItems() {
    this.appStateService
      .getItems()
      .then((items) =>
        this.setItemsState(generateFirstTimeSortableDataSource(items), false)
      );
  }

  onClickAddRow = () => {
    this.goTo(ITEM_DETAIL, {
      isCreateView: true,
    });
  };

  onClickRowEdit = (item) => {
    this.goTo(ITEM_DETAIL, {
      itemId: item.id,
      isCreateView: false,
    });
  };

  setItemsState = (items, isSequenceUpdate = false) => {
    this.setState({
      items,
    });
    if (isSequenceUpdate) {
      this.serviceExecutor.execute(UPDATE_ITEMS_SEQUENCES(items));
    }
  };
}
