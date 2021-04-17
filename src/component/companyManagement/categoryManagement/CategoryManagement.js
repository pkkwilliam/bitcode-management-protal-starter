import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import CategoryManagementView from "./CategoryManagement.view";

export default class CategoryManagement extends ApplicationComponent {
  state = {
    ...this.state,
  };

  render() {
    return <CategoryManagementView {...this.state} />;
  }
}
