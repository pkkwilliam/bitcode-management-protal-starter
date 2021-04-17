import { Component } from "react";
import { RmmsPortalContext } from "src/context/contextProvider";
import ServiceExecutor from "src/service/serviceExecutor";
import ApplicationContext from "./applicationContext";

export default class ApplicationComponent extends Component {
  state = {
    ...this.state,
  };

  static contextType = RmmsPortalContext;
  static _appContext = new ApplicationContext();
  static _serviceExecutor;
  static _appState;

  constructor() {
    super();
    this._appContext = new ApplicationContext();
    this._serviceExecutor = new ServiceExecutor(this.appContext.host);
  }

  get appContext() {
    return this._appContext;
  }

  get serviceExecutor() {
    return this._serviceExecutor;
  }

  get appState() {
    return this.context;
  }
}
