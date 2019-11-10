import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import { RedirectAuth } from './RedirectAuth';
import { extractCodeFromUrl, ValidateToken } from './ValidateToken';
import { observer } from 'mobx-react';
import { AuthToken } from '../../../../backend/src/auth/AuthToken';
import { Popular } from '../popular/Popular';

const AuthenticationFlow = (props: AuthToken) => {
  if (props.token) {
    return <Popular/>;
  } else if (!AuthStorage.bearer_token && extractCodeFromUrl()) {
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