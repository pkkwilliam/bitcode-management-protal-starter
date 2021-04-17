export default class ServiceExecutor {
  host;

  constructor(host) {
    this.host = host;
  }

  execute(service) {
    const { method, url } = service;
    fetch(url, {
      method,
    })
      .then((rawResponse) => this.onSuccess(rawResponse))
      .catch((exception) => {
        console.log(exception);
      });
  }

  onSuccess(rawResponse) {
    const { data, statusCode } = rawResponse;
    switch (statusCode) {
      case "200":
        return JSON.parse(data);
      default:
        return;
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
