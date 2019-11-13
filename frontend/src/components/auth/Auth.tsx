import React, { Component } from 'react';
import AuthStorage from './Auth.storage';
import { RedirectAuth } from './RedirectAuth';
import { extractCodeFromUrl, ValidateToken } from './ValidateToken';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';
import { AuthToken } from './Auth.interfaces';

const AuthenticationFlow = (props: AuthToken) => {
  if (props.token) {
    return <Redirect push={true} to={'/popular'} />;
  } else if (!props.token && extractCodeFromUrl()) {
    return <ValidateToken />;
  } else {
    return <RedirectAuth />;
  }
};

@observer
export class Auth extends Component {

  public render() {
    return (
      <AuthenticationFlow token={AuthStorage.bearer_token} />
    );
  }
}