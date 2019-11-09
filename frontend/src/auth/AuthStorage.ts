import { computed, observable } from 'mobx';

class AuthStorage {
  private _clientId = '4cba0d21d0b85e9cae68';

  private _redirect_uri = '/token/answer';

  private _redirect_host = 'http://localhost:3000';

  private _request_auth = 'https://www.thingiverse.com/login/oauth/authorize'

  private _response_type = 'code';

  @observable private _code_retrieved: string;

  @computed
  get code_retrieved(): string {
    return this._code_retrieved;
  }

  set code_retrieved(value: string) {
    this._code_retrieved = value;
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