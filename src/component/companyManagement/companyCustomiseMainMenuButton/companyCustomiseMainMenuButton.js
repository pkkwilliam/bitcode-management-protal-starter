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
        onAddImage={this.onAddImage}
        onClickCancel={this.onClickCancel}
        onChangeName={this.onChangeName}
        onClickSubmit={this.onClickSubmit}
        onChangeObject={this.onChangeObject}
        onChangeOptionType={this.onChangeOptionType}
        {...this.state}
      />
    );
  }

  getObjectDetail(index) {
    const {
      mainMenuButtons,
    } = this.appState.companyCustomise.companyCustomiseInfo.landingPage;
    const buttonObject = mainMenuButtons[index];
    this.setState({
      url: buttonObject.url,
    });
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
