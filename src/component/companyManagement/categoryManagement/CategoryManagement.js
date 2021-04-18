import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { GET_CATEGORIES } from "src/service/service";
import CategoryManagementView from "./CategoryManagement.view";

export default class CategoryManagement extends ApplicationComponent {
  state = {
    ...this.state,
    categories: [],
  };

  componentDidMount() {
    super.componentDidMount();
    this.getCategories();
  }

  render() {
    console.log(this.state.categories);
    return <CategoryManagementView {...this.state} />;
  }

  getCategories() {
    this.serviceExecutor
      .execute(GET_CATEGORIES())
      .then((categories) => this.setState({ categories }));
  }
}
