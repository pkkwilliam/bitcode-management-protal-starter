import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { CATEGORY_DETAIL } from "src/routes/ApplicationRoutes";
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
        getCategoriesServiceRequest={this.getCategoriesServiceRequest}
        onClickAddRow={this.onClickAddRow}
        onClickRow={this.onClickRow}
        {...this.state}
      />
    );
  }

  getCategoriesServiceRequest = async () => {
    const { dirty } = this.appState.category;
    return new Promise((resolve, reject) => {
      if (dirty) {
        this.serviceExecutor.execute(GET_CATEGORIES()).then((categories) => {
          this.appState.category.setCategories(categories);
          return resolve(categories);
        });
      } else {
        return resolve(this.appState.category.categories);
      }
    });
  };

  onClickAddRow = () => {
    this.goTo(CATEGORY_DETAIL, {
      isCreateView: true,
    });
  };

  onClickRow = (category) => {
    this.goTo(CATEGORY_DETAIL, {
      categoryId: category.id,
      isCreateView: false,
    });
  };
}
