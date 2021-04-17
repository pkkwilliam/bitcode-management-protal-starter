import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import ItemManagementView from "./ItemManagement.view";

export default class ItemManagement extends ApplicationComponent {
  state = {
    ...this.state,
  };

  render() {
    return <ItemManagementView {...this.state} />;
  }
}
