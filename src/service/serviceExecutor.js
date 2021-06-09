const TOKEN_HEADER = "Authorization";
export default class ServiceExecutor {
  appStorage;
  host;

  constructor(host, appStorage) {
    this.appStorage = appStorage;
    this.host = host;
  }

  get requestHeader() {
    let headers = { "Content-Type": "application/json" };
    const userToken = this.appStorage.getUserToken();
    if (userToken) {
      headers = { ...headers, Authorization: `Bearer ${userToken}` };
    }
    return headers;
  }

  async execute(service) {
    const { body, externalRequest, method, url } = service;
    return new Promise((resolve, reject) => {
      fetch((externalRequest ? "" : this.host) + url, {
        body,
        headers: externalRequest ? {} : this.requestHeader,
        method,
        // mode: externalRequest ? "same-origin" : "cors",
      })
        .then((rawResponse) => {
          // this can only mean that request to the server is success, but not necessary meant that service is sucess, it can be 400, 401...
          return this.onSuccessServerRequest(rawResponse, resolve, reject, url);
        })
        .catch((exception) => {
          return reject();
        });
    });
  }

  checkHeaders(headers) {
    const userToken = headers.get(TOKEN_HEADER);
    if (userToken) {
      this.appStorage.setUserToken(userToken);
    }
  }

  onSuccessServerRequest(rawResponse, resolve, reject, url) {
    const { headers, status } = rawResponse;
    this.checkHeaders(headers);
    switch (status) {
      case 200:
        return rawResponse.json().then((jsonData) => resolve(jsonData));
      case 204:
        return resolve();
      case 401: {
        return reject("Bad Credential");
      }
      default:
        return reject();
    }
  }

  on2xxResponse(rawResponse) {
    if (rawResponse.statusCode === 200) {
      return JSON.parse(rawResponse.data);
    } else {
      return;
    }
  }

  on3xxResponse(rawResponse) {}

  on4xxResponse(rawResponse) {}

  on5xxResponse(rawResponse) {}
}
