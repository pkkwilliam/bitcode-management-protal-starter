import CompanyCustomiseImageUploader from "../companyCustomiseImageUploader/CompanyCustomiseImageUploader";
import CompanyCustomiseBottomListView from "./companyCustomiseBottomList.view";

export default class CompanyCustomiseBottomList extends CompanyCustomiseImageUploader {
  state = {
    ...this.state,
    selectedType: "category",
  };

  render() {
    return (
      <CompanyCustomiseBottomListView
        onAddImage={this.onAddImage}
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        onChangeObject={this.onChangeObject}
        onChangeOptionType={this.onChangeOptionType}
        {...this.state}
      />
    );
  }

  addObjectIntoCurrentCompanyCustomise() {
    const { companyCustomise, objectSelected, options, selectedType, url } =
      this.state;
    const { bottomList } = companyCustomise.landingPage;
    const selectedOption = options.find(
      (option) => option.id === objectSelected
    );
    const companyCustomiseImage = {
      id: objectSelected,
      name: selectedOption.name,
      type: selectedType,
      url,
    };
    bottomList.push(companyCustomiseImage);
    companyCustomise.landingPage.bottomList = bottomList;
    this.setState({
      companyCustomise,
    });
  }

  updateObjectInCurrentCompanyCustomise() {
    const { companyCustomise, index, objectSelected } = this.state;
    const { bottomList } = companyCustomise.landingPage;
    bottomList[index] = {
      id: objectSelected,
      type: "category",
    };
    companyCustomise.landingPage.bottomList = bottomList;
    this.setState({
      companyCustomise,
    });
  }
}
