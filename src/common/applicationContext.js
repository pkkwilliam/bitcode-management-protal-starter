export default class ApplicationContext {
  get host() {
    const {
      REACT_APP_ENV,
      REACT_APP_LOCAL_SERVICE_URL,
      REACT_APP_PROD_SERVICE_URL,
    } = process.env;
    switch (REACT_APP_ENV) {
      case "PROD":
        return REACT_APP_PROD_SERVICE_URL;
      case "LOCAL":
        return REACT_APP_LOCAL_SERVICE_URL;
      default:
        return REACT_APP_LOCAL_SERVICE_URL;
    }
  }

  get mock() {
    return true;
  }
}
