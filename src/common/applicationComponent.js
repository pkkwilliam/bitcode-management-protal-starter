import { Component } from "react";
import { RmmsPortalContext } from "src/context/contextProvider";
import ServiceExecutor from "src/service/serviceExecutor";
import ApplicationContext from "./ApplicationContext";
import ApplicationStorage from "./ApplicationStorage";

export default class ApplicationComponent extends Component {
  state = {
    ...this.state,
  };

  static _appContext;
  static _appStorage;
  static contextType = RmmsPortalContext;
  static _serviceExecutor;

  constructor() {
    super();
    this._appContext = new ApplicationContext();
    this._appStorage = new ApplicationStorage();
    this._serviceExecutor = new ServiceExecutor(this.appContext.host);
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
}
