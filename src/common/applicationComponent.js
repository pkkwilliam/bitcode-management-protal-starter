import { Component } from "react";
import { RmmsPortalContext } from "src/context/contextProvider";
import ServiceExecutor from "src/service/serviceExecutor";
import ApplicationContext from "./ApplicationContext";
import ApplicationStorage from "./ApplicationStorage";

export default class ApplicationComponent extends Component {
  state = {
    modal: {
      body: "",
      header: "",
      show: false,
    },
    toast: {
      body: "",
      header: "",
      show: false,
    },
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
