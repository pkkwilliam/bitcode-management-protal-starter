import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { COMPANY_CUSTOMISE_IMAGE_UPLOADER } from "src/routes/ApplicationRoutes";
import { UPDATE_COMPANY_CUSTOMISE } from "src/service/service";
import CompanyCustomiseView from "./CompanyCustomise.view";

export default class CompanyCustomise extends ApplicationComponent {
  state = {
    ...this.state,
    companyCustomise: {
      landingPage: { carousel: [] },
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
        onClickAddCarouselImage={this.onClickAddCarouselImage}
        onClickEditCarouselImage={this.onClickEditCarouselImage}
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

  onClickAddCarouselImage = () => {
    this.goTo(COMPANY_CUSTOMISE_IMAGE_UPLOADER, { isCreateView: true });
  };

  onClickEditCarouselImage = (row) => {
    console.log(row);
    this.goTo(COMPANY_CUSTOMISE_IMAGE_UPLOADER, {
      id: row.id,
      isCreateView: false,
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
