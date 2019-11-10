import { computed, observable } from 'mobx';

class AuthStorage {
  private _clientId = 'f54c730466738f8e6607';

  private _redirect_uri = '/token/answer';

  private _redirect_host = 'http://localhost:3000';

  private _request_auth = 'https://www.thingiverse.com/login/oauth/authorize';

  private _response_type = 'code';

  @observable private _bearer_token: string;

  @computed
  get bearer_token(): string {
    return this._bearer_token;
  }

  set bearer_token(value: string) {
    this._bearer_token = value;
  }

  get clientId(): string {
    return this._clientId;
  }

  get redirect_host(): string {
    return this._redirect_host;
  }

  get redirect_uri(): string {
    return this._redirect_uri;
  }

  get request_auth(): string {
    return this._request_auth;
  }

  get response_type(): string {
    return this._response_type;
  }
}

export default new AuthStorage();