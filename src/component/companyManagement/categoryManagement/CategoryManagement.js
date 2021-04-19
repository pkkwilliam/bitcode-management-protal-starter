import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { GET_CATEGORIES } from "src/service/service";
import CategoryManagementView from "./CategoryManagement.view";

export default class CategoryManagement extends ApplicationComponent {
  state = {
    ...this.state,
  };

  componentDidMount() {
    super.componentDidMount();
  }

  render() {
    return (
      <CategoryManagementView
        getCategoriesService={GET_CATEGORIES}
        {...this.state}
      />
    );
  }
}
