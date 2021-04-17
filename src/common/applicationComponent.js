import { Component } from "react";
import { RmmsPortalContext } from "src/context/contextProvider";
import ServiceExecutor from "src/service/serviceExecutor";

export default class ApplicationComponent extends Component {
  state = {
    ...this.state,
  };

  static contextType = RmmsPortalContext;
  static _appContext = new ApplicationComponent();
  static _serviceExecutor;
  static _appState;

  get appContent() {
    return this._appContext;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(this.appContent.host);
    }
    return this._serviceExecutor;
  }

  get appState() {
    return this.context;
  }
}
