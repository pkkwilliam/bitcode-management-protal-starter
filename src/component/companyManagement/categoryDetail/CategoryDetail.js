import React from "react";
import ApplicationComponent from "../../../common/ApplicationComponent";
import { CATEGORY_MANAGEMENT } from "../../../routes/ApplicationRoutes";
import CategoryDetailView from "./CategoryDetail.view";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../../../service/service";

export default class CategoryDetail extends ApplicationComponent {
  state = {
    ...this.state,
    category: undefined,
    isCreateView: false,
  };

  componentDidMount() {
    const { categoryId, isCreateView } = this.getRouterProps();
    if (isCreateView) {
      this.setState({
        isCreateView,
      });
    } else {
      const { categories } = this.appState.category;
      // might need to change this into for loop becahse foreach can be break
      categories.forEach((category) => {
        if (category.id === categoryId) {
          this.setState({ category, isCreateView: false });
        }
      });
    }
  }

  render() {
    return (
      <CategoryDetailView
        onChangeCategoryName={this.onChangeCategoryName}
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        {...this.state}
      />
    );
  }

  onChangeCategoryName = (name) => {
    this.setState((state) => ({
      category: {
        ...state.category,
        name,
      },
    }));
  };

  onClickCancel = () => {
    this.goTo(CATEGORY_MANAGEMENT);
  };

  onClickDelete = () => {
    this.setState({
      loading: true,
    });
    const { category } = this.state;
    this.serviceExecutor
      .execute(DELETE_CATEGORY(category))
      .then(() => {
        this.onServiceRequestSucceed(
          `${category.name}已被删除\n2秒後回到上一頁`,
          "删除成功"
        );
      })
      .catch(() => this.onServiceRequestFailed());
  };

  onClickSubmit = () => {
    const { category, isCreateView } = this.state;
    this.setState({ loading: true });
    if (isCreateView) {
      this.serviceExecutor
        .execute(CREATE_CATEGORY(category))
        .then((category) => {
          this.onServiceRequestSucceed(
            `${category.name}已新增\n2秒後回到上一頁`,
            "新增成功"
          );
        })
        .catch(() => this.onServiceRequestFailed());
    } else {
      this.serviceExecutor
        .execute(UPDATE_CATEGORY(category))
        .then((category) => {
          this.onServiceRequestSucceed(
            `${category.name}已修改\n2秒後回到上一頁`,
            "修改成功"
          );
        })
        .catch(() => this.onServiceRequestFailed());
    }
  };

  onServiceRequestFailed() {
    this.setState({
      loading: false,
    });
    this.addToastMessage({
      body: "請求失敗，請稍後再試。",
      header: "失敗",
    });
  }

  onServiceRequestSucceed(toastBody, toastHeader) {
    this.setState({
      loading: false,
    });
    this.appState.category.setCategoryDirty();
    this.addToastMessage({
      body: toastBody,
      header: toastHeader,
    });
    this.goTo(CATEGORY_MANAGEMENT, {}, 1500);
  }
}
