import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import * as _ from 'lodash';
import { retrieveToken } from './authService';
import history from '../../navigation/history';


export class Auth extends Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    AuthStorage.bearer_token = 'aaa';
    let tokenRetrieved = retrieveToken(this.extractCodeFromUrl()!)

    if (!_.isNil(tokenRetrieved)) {
      AuthStorage.bearer_token = tokenRetrieved;
      history.push('/popular');
    }
    return (
      <div/>
    );
  }

  private authenticationFlow() {
    let tokenRetrieved = retrieveToken(this.extractCodeFromUrl()!)

    if (!_.isNil(tokenRetrieved)) {
      AuthStorage.bearer_token = tokenRetrieved;
      history.push('/popular');
    }
  }

  private extractCodeFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  }
}