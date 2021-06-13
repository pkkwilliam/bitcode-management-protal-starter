import React from "react";
import ApplicationComponent from "../../../common/ApplicationComponent";
import {
  COMPANY_CUSTOMISE_BOTTOM_LIST,
  COMPANY_CUSTOMISE_IMAGE_UPLOADER,
  COMPANY_CUSTOMISE_MAIN_MENU_BUTTON,
} from "../../../routes/ApplicationRoutes";
import { UPDATE_COMPANY_CUSTOMISE } from "../../../service/service";
import CompanyCustomiseView from "./CompanyCustomise.view";

export default class CompanyCustomise extends ApplicationComponent {
  state = {
    ...this.state,
    companyCustomise: {
      landingPage: { bottomList: [], carousel: [], mainMenuButtons: [] },
      style: {
        primary: "",
        secondary: "",
      },
    },
  };

  componentDidMount() {
    super.componentDidMount();
    this.appStateService
      .getCompanyCustomise()
      .then((companyCustomise) => this.setState({ companyCustomise }));
  }

  render() {
    return (
      <CompanyCustomiseView
        onClickAddBottomList={this.onClickAddBottomList}
        onClickAddCarouselImage={this.onClickAddCarouselImage}
        onClickEditBottomList={this.onClickEditBottomList}
        onClickEditCarouselImage={this.onClickEditCarouselImage}
        onClickEditMainMenuButton={this.onClickEditMainMenuButton}
        onClickUpdateCompanyCustomise={this.onClickUpdateCompanyCustomise}
        onChangeCompanyCustomise={this.onChangeCompanyCustomise}
        {...this.state}
      />
    );
  }

  onChangeCompanyCustomise = (companyCustomise) => {
    this.setState({
      companyCustomise,
    });
  };

  onClickAddBottomList = () => {
    this.goTo(COMPANY_CUSTOMISE_BOTTOM_LIST, { isCreateView: true });
  };

  onClickAddCarouselImage = () => {
    this.goTo(COMPANY_CUSTOMISE_IMAGE_UPLOADER, { isCreateView: true });
  };

  onClickEditBottomList = (row, index) => {
    this.goTo(COMPANY_CUSTOMISE_BOTTOM_LIST, {
      id: row.id,
      index,
      isCreateView: false,
      type: row.type,
    });
  };

  onClickEditCarouselImage = (row, index) => {
    this.goTo(COMPANY_CUSTOMISE_IMAGE_UPLOADER, {
      id: row.id,
      index,
      isCreateView: false,
      type: row.type,
    });
  };

  onClickEditMainMenuButton = (row, index) => {
    this.goTo(COMPANY_CUSTOMISE_MAIN_MENU_BUTTON, {
      id: row.id,
      index,
      name: row.name,
      type: row.type,
    });
  };

  onClickUpdateCompanyCustomise = () => {
    this.updateCompanyCustomise();
  };

  updateCompanyCustomise(onSucees = () => {}) {
    this.toggleLoading();
    const { companyCustomise } = this.state;
    this.serviceExecutor
      .execute(UPDATE_COMPANY_CUSTOMISE(companyCustomise))
      .then((result) => {
        this.addToastMessage({
          body: "已成功修改頁面定制",
          header: "修改成功",
        });
        this.appStateService
          .getCompanyCustomise()
          .then((companyCustomise) => this.setState({ companyCustomise }));
        onSucees();
        this.toggleLoading();
      });
  }
}
