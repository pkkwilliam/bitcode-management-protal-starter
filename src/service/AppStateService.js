import {
  GET_CATEGORIES,
  GET_COMPANY,
  GET_COMPANY_CUSTOMISE,
  GET_GITHUB_CONTENT,
  GET_ITEMS,
} from "./service";

export default class AppStateService {
  appState;
  serviceExecutor;

  constructor(appState, serviceExecutor) {
    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  async getAppContent() {
    const { appContent } = this.appState;
    return new Promise((resolve, reject) => {
      if (appContent.dirty) {
        this.serviceExecutor
          .execute(GET_GITHUB_CONTENT("/appContent.json"))
          .then((content) => {
            this.appState.appContent.setAppContent(content);
            return resolve(content);
          });
      } else {
        return resolve(appContent.content);
      }
    });
  }

  async getCompany() {
    const { company } = this.appState;
    return new Promise((resolve, reject) => {
      if (company.dirty) {
        this.serviceExecutor.execute(GET_COMPANY()).then((company) => {
          this.appState.company.setCompany(company);
          return resolve(company);
        });
      } else {
        return resolve(company.companyInfo);
      }
    });
  }

  async getCompanyCustomise() {
    const { company, companyCustomise } = this.appState;
    return new Promise((resolve, reject) => {
      if (companyCustomise.dirty) {
        this.serviceExecutor
          .execute(GET_COMPANY_CUSTOMISE(company.companyInfo.id))
          .then((companyCustomise) => {
            const content = JSON.parse(companyCustomise.content);
            this.appState.companyCustomise.setCompanyCustomise(content);
            return resolve(content);
          });
      } else {
        return resolve(companyCustomise.companyCustomiseInfo);
      }
    });
  }

  async getCategories() {
    const { category } = this.appState;
    return new Promise((resolve, reject) => {
      if (category.dirty) {
        this.serviceExecutor.execute(GET_CATEGORIES()).then((categories) => {
          this.appState.category.setCategories(categories);
          return resolve(categories);
        });
      } else {
        return resolve(category.categories);
      }
    });
  }

  async getItems() {
    const { item } = this.appState;
    return new Promise((resolve, reject) => {
      if (item.dirty) {
        this.serviceExecutor.execute(GET_ITEMS()).then((items) => {
          this.appState.item.setItems(items);
          return resolve(items);
        });
      } else {
        return resolve(item.items);
      }
    });
  }
}
