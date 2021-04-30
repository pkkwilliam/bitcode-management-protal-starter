import CompanyCustomiseImageUploader from "../companyCustomiseImageUploader/CompanyCustomiseImageUploader";
import CompanyCustomiseMainMenuButtonView from "./companyCustomiseMainMenuButton.view";

export default class CompanyCustomiseMainMenuButton extends CompanyCustomiseImageUploader {
  state = {
    ...this.state,
    index: "",
    name: "",
  };

  render() {
    return (
      <CompanyCustomiseMainMenuButtonView
        onClickCancel={this.onClickCancel}
        onChangeName={this.onChangeName}
        onClickSubmit={this.onClickSubmit}
        onChangeObject={this.onChangeObject}
        onChangeOptionType={this.onChangeOptionType}
        {...this.state}
      />
    );
  }

  onChangeName = (name) => {
    this.setState({
      name,
    });
  };

  updateObjectInCurrentCompanyCustomise() {
    const { companyCustomise, index, name, objectSelected, url } = this.state;
    const { mainMenuButtons } = companyCustomise.landingPage;
    mainMenuButtons[index] = {
      id: objectSelected,
      name,
      type: "category",
      url,
    };
    companyCustomise.landingPage.mainMenuButtons = mainMenuButtons;
    this.setState({
      companyCustomise,
    });
  }
}
