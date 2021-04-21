import { Component } from "react";
import { RmmsPortalContext } from "src/context/contextProvider";
import ServiceExecutor from "src/service/serviceExecutor";
import ApplicationContext from "./ApplicationContext";
import ApplicationStorage from "./ApplicationStorage";

export default class ApplicationComponent extends Component {
  state = {
    loading: false,
    modal: {
      body: "",
      header: "",
      show: false,
    },
    toasts: [],
  };

  static _appContext;
  static _appStorage;
  static contextType = RmmsPortalContext;
  static _serviceExecutor;

  constructor() {
    super();
    this._appContext = new ApplicationContext();
    this._appStorage = new ApplicationStorage();
    this._serviceExecutor = new ServiceExecutor(
      this.appContext.host,
      this.appStorage
    );
  }

  componentDidMount() {
    this.validateUserPermission();
  }

  get appContext() {
    return this._appContext;
  }

  get appState() {
    return this.context;
  }

  get appStorage() {
    return this._appStorage;
  }

  get serviceExecutor() {
    return this._serviceExecutor;
  }

  addToastMessage(toast) {
    this.setState((state) => ({
      toasts: state.toasts.concat(toast),
    }));
  }

  getRouterProps() {
    return this?.props?.history?.location?.state ?? {};
  }

  goTo(page, params = {}, delay = 0) {
    setTimeout(() => {
      this.props.history.push({
        pathname: page,
        state: params,
      });
    }, delay);
  }

  onCloseErrorModal = () => {
    this.setState({
      modal: {},
    });
  };

  validateUserPermission() {
    const userToken = this.appStorage.getUserToken();
    if (!userToken) {
      this.props.history.push("/login");
    }
  }
}
