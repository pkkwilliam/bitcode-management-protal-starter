export default class ApplicationContext {
  get host() {
    return this.mock ? "http://localhost:8081" : "http://localhost:8081";
  }

  get mock() {
    return true;
  }
}
