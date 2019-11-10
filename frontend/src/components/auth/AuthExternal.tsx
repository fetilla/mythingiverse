import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import * as _ from 'lodash';
import { observer } from 'mobx-react';

@observer
export class AuthExternal extends Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    if (_.isNil(AuthStorage.bearer_token)) {
      this.redirectToExternalAuth();
    }
    return (
      <div/>
    );
  }

  private redirectToExternalAuth() {
    window.location.assign(
      `${AuthStorage.request_auth}?client_id=${AuthStorage.clientId}&response_type=${AuthStorage.response_type}&redirect_uri=${AuthStorage.redirect_host}${AuthStorage.redirect_uri}`);
  }

  private extractCodeFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  }
}