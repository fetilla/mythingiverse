import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import * as _ from 'lodash';
import { RedirectAuth } from './RedirectAuth';
import { extractCodeFromUrl, ValidateToken } from './ValidateToken';
import { observer } from 'mobx-react';

@observer
export class Auth extends Component {

  public render() {
    return (
        !_.isNil(AuthStorage.bearer_token) ? <div/> :
          _.isNil(AuthStorage.bearer_token) && !_.isNil(extractCodeFromUrl()) ? <ValidateToken/> : <RedirectAuth/>
    );
  }
}