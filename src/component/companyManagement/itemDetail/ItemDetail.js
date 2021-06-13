import React from "react";
import ApplicationComponent from "../../../common/ApplicationComponent";
import { ITEM_MANAGEMENT } from "../../../routes/ApplicationRoutes";
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
  RS_ADDRESS_TEXTFIELD,
  RS_LIVING_ROOM_TEXTFIELD,
  RS_RESTROOM_TEXTFIELD,
  RS_ROOM_TEXTFIELD,
} from "./ItemDetail.view";

export default class ItemDetail extends ApplicationComponent {
  state = {
    ...this.state,
    item: {
      address: "",
      area: "",
      categories: [],
      cost: 0,
      description: "",
      features: [],
      imageUrls: [],
      listingType: undefined,
      livingRoom: 0,
      name: "",
      restroom: 0,
      room: 0,
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
        onChangeFeature={this.onChangeFeature}
        onChangeTextfieldInput={this.onChangeTextfieldInput}
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        onAddImage={this.onAddImage}
        onRemoveImage={this.onRemoveImage}
        onSelectedCategory={this.onSelectedCategory}
        onSelectedListingType={this.onSelectedListingType}
        {...this.state}
      />
    );
  }

  onChangeFeature = (index, value) => {
    let { features } = this.state.item;
    if (!features[index]) {
      features[index] = "";
    }
    features[index] = value;
    this.setState((state) => ({
      item: {
        ...state.item,
        features,
      },
    }));
  };

  onChangeTextfieldInput = (type, event) => {
    let { value } = event.target;
    let { address, area, cost, description, livingRoom, name, restroom, room } =
      this.state.item;
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
      case RS_ADDRESS_TEXTFIELD:
        address = value;
        break;
      case RS_LIVING_ROOM_TEXTFIELD:
        livingRoom = value;
        break;
      case RS_RESTROOM_TEXTFIELD:
        restroom = value;
        break;
      case RS_ROOM_TEXTFIELD:
        room = value;
        break;
      default:
        break;
    }
    this.setState((state) => ({
      item: {
        ...state.item,
        address,
        area,
        cost,
        description,
        livingRoom,
        name,
        restroom,
        room,
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

  onAddImage = (newImageUrls) => {
    this.setState((state) => ({
      item: {
        ...state.item,
        imageUrls: state.item.imageUrls.concat(newImageUrls),
      },
    }));
  };

  onRemoveImage = (index) => {
    const { imageUrls } = this.state.item;
    imageUrls.splice(index, 1);
    this.setState((state) => ({
      item: {
        ...state.item,
        imageUrls,
      },
    }));
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

  onSelectedListingType = (listingType) => {
    this.setState((state) => ({
      item: {
        ...state.item,
        listingType,
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
