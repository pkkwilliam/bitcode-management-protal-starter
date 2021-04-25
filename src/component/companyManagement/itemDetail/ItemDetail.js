import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { ITEM_MANAGEMENT } from "src/routes/ApplicationRoutes";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  GET_CATEGORIES,
  UPDATE_ITEM,
} from "../../../service/service";
import ItemDetailView, {
  AREA_TEXTFIELD,
  COST_TEXTFIELD,
  DESCRIPTION_TEXTFIELD,
  ITEM_NAME_TEXTFIELD,
} from "./ItemDetail.view";

export default class ItemDetail extends ApplicationComponent {
  state = {
    ...this.state,
    item: {
      area: "",
      cost: 0,
      description: "",
      name: "",
      categories: [],
    },
    isCreateView: false,
  };

  componentDidMount() {
    super.componentDidMount();
    const { itemId, isCreateView } = this.getRouterProps();
    if (this.appState.category.dirty) {
      this.serviceExecutor
        .execute(GET_CATEGORIES())
        .then((categories) => this.appState.category.setCategories(categories));
    }
    if (isCreateView) {
      this.setState({
        isCreateView,
      });
    } else {
      const { items } = this.appState.item;
      // might need to change this into for loop becahse foreach can be break
      items.forEach((item) => {
        if (item.id === itemId) {
          this.setState({ item, isCreateView: false });
        }
      });
    }
  }

  render() {
    return (
      <ItemDetailView
        categories={this.appState.category.categories}
        onChangeTextfieldInput={this.onChangeTextfieldInput}
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        onSelectedCategory={this.onSelectedCategory}
        {...this.state}
      />
    );
  }

  onChangeTextfieldInput = (type, event) => {
    let { value } = event.target;
    let { area, cost, description, name } = this.state.item;
    switch (type) {
      case AREA_TEXTFIELD:
        area = value;
        break;
      case COST_TEXTFIELD:
        cost = value;
        break;
      case DESCRIPTION_TEXTFIELD:
        description = value;
        break;
      case ITEM_NAME_TEXTFIELD:
        name = value;
        break;
      default:
        break;
    }
    this.setState((state) => ({
      item: {
        ...state.item,
        area,
        cost,
        description,
        name,
      },
    }));
  };

  onClickCancel = () => {
    this.goTo(ITEM_MANAGEMENT);
  };

  onClickDelete = () => {
    this.setState({
      loading: true,
    });
    const { item } = this.state;
    this.serviceExecutor
      .execute(DELETE_ITEM(this.generateItemRequest(item)))
      .then(() => {
        this.onServiceRequestSucceed(
          `${item.name}已被删除\n2秒後回到上一頁`,
          "删除成功"
        );
      })
      .catch(() => this.onServiceRequestFailed());
  };

  onClickSubmit = () => {
    const { item, isCreateView } = this.state;
    this.setState({ loading: true });
    if (isCreateView) {
      this.serviceExecutor
        .execute(CREATE_ITEM(this.generateItemRequest(item)))
        .then((item) => {
          this.onServiceRequestSucceed(
            `${item.name}已新增\n2秒後回到上一頁`,
            "新增成功"
          );
        })
        .catch(() => this.onServiceRequestFailed());
    } else {
      this.serviceExecutor
        .execute(UPDATE_ITEM(this.generateItemRequest(item)))
        .then((item) => {
          this.onServiceRequestSucceed(
            `${item.name}已修改\n2秒後回到上一頁`,
            "修改成功"
          );
        })
        .catch(() => this.onServiceRequestFailed());
    }
  };

  onSelectedCategory = (categories) => {
    const categoryObjects = categories.map((category) => ({ id: category }));
    this.setState((state) => ({
      item: {
        ...state.item,
        categories: categoryObjects,
      },
    }));
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
    this.appState.item.setItemDirty();
    this.addToastMessage({
      body: toastBody,
      header: toastHeader,
    });
    this.goTo(ITEM_MANAGEMENT, {}, 1500);
  }

  generateItemRequest(item) {
    return { ...item, type: this.appState.company.companyInfo.companyType };
  }
}
