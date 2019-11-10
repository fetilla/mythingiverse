import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import * as _ from 'lodash';
import { RedirectAuth } from './RedirectAuth';
import { extractCodeFromUrl, ValidateToken } from './ValidateToken';
import { observer } from 'mobx-react';
import { AuthToken } from '../../../../backend/src/auth/AuthToken';
import { Popular } from '../popular/Popular';

const AuthenticationFlow = (props: AuthToken) => {
  if (!_.isNil(props.token)) {
    return <Popular/>;
  } else if (_.isNil(AuthStorage.bearer_token) && !_.isNil(extractCodeFromUrl())) {
    return <ValidateToken/>;
  } else {
    return <RedirectAuth/>;
  }
}

@observer
export class Auth extends Component {

  public render() {
    return (
      <AuthenticationFlow token={AuthStorage.bearer_token}/>
    );
  }
}