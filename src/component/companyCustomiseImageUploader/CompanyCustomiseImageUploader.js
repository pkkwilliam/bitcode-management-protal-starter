import React from "react";
import { COMPANY_CUSTOMISE } from "src/routes/ApplicationRoutes";
import CompanyCustomise from "../companyManagement/companyCustomise/CompanyCustomise";
import CompanyCustomiseImageUploaderView, {
  CATEGORY_SELECT,
  ITEM_SELECT,
} from "./CompanyCustomiseImageUploader.view";

export default class CompanyCustomiseImageUploader extends CompanyCustomise {
  state = {
    ...this.state,
    editObjectId: undefined, // to make a record which object was clicked to edit, so that we can take this ID and modify the json instead
    isCreateView: false,
    objectSelected: undefined,
    options: [],
    selectedType: undefined,
    url:
      "https://image.freepik.com/free-vector/investing-money-house_1133-87.jpg",
  };

  componentDidMount() {
    super.componentDidMount();
    const { id, index, isCreateView, type } = this.getRouterProps();
    if (isCreateView) {
      this.setState({
        isCreateView,
      });
    } else {
      this.setState({
        editObjectId: id,
        objectSelected: id,
        selectedType: type,
      });
      this.onChangeOptionType(type);
    }
  }

  render() {
    return (
      <CompanyCustomiseImageUploaderView
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        onChangeObject={this.onChangeObject}
        onChangeOptionType={this.onChangeOptionType}
        {...this.state}
      />
    );
  }

  onChangeOptionType = (type) => {
    switch (type) {
      case CATEGORY_SELECT.value:
        this.appStateService
          .getCategories()
          .then((categories) => this.onObjectOptionLoaded(type, categories));
        break;
      case ITEM_SELECT.value:
        this.appStateService
          .getItems()
          .then((items) => this.onObjectOptionLoaded(type, items));
        break;
      default:
        this.onObjectOptionLoaded([]);
    }
  };

  onChangeObject = (objectId) => {
    this.setState({
      objectSelected: objectId,
    });
  };

  onClickCancel = () => {
    this.goTo(COMPANY_CUSTOMISE);
  };

  onClickDelete = () => {
    let { companyCustomise, objectSelected } = this.state;
    let { carousel } = companyCustomise.landingPage;
    companyCustomise.landingPage.carousel = this.removeImage(
      carousel,
      objectSelected
    );
    this.updateCompanyCustomise(() =>
      setTimeout(() => this.goTo(COMPANY_CUSTOMISE), 2000)
    );
  };

  onClickSubmit = () => {
    const { isCreateView } = this.state;
    if (isCreateView) {
      this.pushNewImageToCarousel();
    } else {
      this.updateCarouselImage();
    }

    this.updateCompanyCustomise(() =>
      setTimeout(() => this.goTo(COMPANY_CUSTOMISE), 2000)
    );
  };

  onObjectOptionLoaded(type, options) {
    this.setState({
      options,
      selectedType: type,
    });
  }

  removeImage(imagesObject, image) {
    return imagesObject.filter((imageObject) => imageObject.id !== image);
  }
  // TODO clean this shit
  updateCarouselImage() {
    const {
      companyCustomise,
      editObjectId,
      objectSelected,
      options,
      selectedType,
      url,
    } = this.state;
    let { carousel } = companyCustomise.landingPage;
    const selectedOption = options.find(
      (option) => option.id === objectSelected
    );
    carousel = carousel.map((image) => {
      if (image.id === editObjectId) {
        return {
          id: objectSelected,
          name: selectedOption.name,
          type: selectedType,
          url,
        };
      } else {
        return image;
      }
    });
    companyCustomise.landingPage.carousel = carousel;
    this.setState({
      companyCustomise,
    });
  }
  // TODO clean this shit
  pushNewImageToCarousel() {
    const {
      companyCustomise,
      objectSelected,
      options,
      selectedType,
      url,
    } = this.state;
    const { carousel } = companyCustomise.landingPage;
    const selectedOption = options.find(
      (option) => option.id === objectSelected
    );
    const companyCustomiseImage = {
      id: objectSelected,
      name: selectedOption.name,
      type: selectedType,
      url,
    };
    carousel.push(companyCustomiseImage);
    companyCustomise.landingPage.carousel = carousel;
    this.setState({
      companyCustomise,
    });
  }
}
