import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { CATEGORY_DETAIL } from "src/routes/ApplicationRoutes";
import { UPDATE_CATEGORIES_SEQUENCES } from "src/service/service";
import CategoryManagementView from "./CategoryManagement.view";
import { generateFirstTimeSortableDataSource } from "../../../common/ApplicationTable";

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
    return (
      <CategoryManagementView
        onClickAddRow={this.onClickAddRow}
        onClickRowEdit={this.onClickRowEdit}
        setCategoriesState={this.setCategoriesState}
        {...this.state}
      />
    );
  }

  getCategories() {
    this.appStateService.getCategories().then((categories) => {
      this.setCategoriesState(
        generateFirstTimeSortableDataSource(categories),
        false
      );
    });
  }

  onClickAddRow = () => {
    this.goTo(CATEGORY_DETAIL, {
      isCreateView: true,
    });
  };

  onClickRowEdit = (category) => {
    this.goTo(CATEGORY_DETAIL, {
      categoryId: category.id,
      isCreateView: false,
    });
  };

  setCategoriesState = (categories, isSequenceUpdate = false) => {
    this.setState({
      categories,
    });
    if (isSequenceUpdate) {
      this.serviceExecutor.execute(UPDATE_CATEGORIES_SEQUENCES(categories));
    }
  };
}
