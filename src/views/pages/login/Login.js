import React from "react";
import ApplicationComponent from "src/common/ApplicationComponent";
import { LOGIN } from "src/service/service";
import LoginView from "./Login.view";

export default class Login extends ApplicationComponent {
  state = {
    ...this.state,
  };

  componentDidMount() {
    this.appStorage.setUserToken(null);
  }

  render() {
    return (
      <LoginView
        onClickLogin={this.onClickLogin}
        onCloseErrorModal={this.onCloseErrorModal}
        {...this.state}
      />
    );
  }

  onClickLogin = (username, password) => {
    this.serviceExecutor
      .execute(LOGIN(username, password))
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((ex) => this.showBadCredentialModal());
  };

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  };

  onChangeUsername = (username) => {
    this.setState({
      username,
    });
  };

  showBadCredentialModal() {
    this.setState({
      modal: {
        body: "用戶名或密碼錯誤",
        header: "錯誤",
        show: true,
      },
    });
  }
}
