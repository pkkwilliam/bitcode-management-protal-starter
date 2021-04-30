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
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickSubmit={this.onClickSubmit}
        onChangeObject={this.onChangeObject}
        onChangeOptionType={this.onChangeOptionType}
        {...this.state}
      />
    );
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
