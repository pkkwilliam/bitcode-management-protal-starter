import React from "react";
import ApplicationComponent from "../../../common/ApplicationComponent";
import StoreManagementView from "./StoreManagement.view";

export default class StoreManagement extends ApplicationComponent {
  state = {
    ...this.state,
  };

  render() {
    return <StoreManagementView {...this.state} />;
  }
}
