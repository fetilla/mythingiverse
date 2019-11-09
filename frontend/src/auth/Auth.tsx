import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import AuthStorage from './AuthStorage';
import { observer } from 'mobx-react';

@observer
export class Auth extends Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    let code = this.extractCodeFromUrl();
    if(AuthStorage.token == null && code != null){
      AuthStorage.token = code!
    } else if(AuthStorage.token == null ) {
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