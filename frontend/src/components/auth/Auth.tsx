import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import { RedirectAuth } from './RedirectAuth';
import { extractCodeFromUrl, ValidateToken } from './ValidateToken';
import { observer } from 'mobx-react';
import { AuthToken } from '../../../../backend/src/auth/AuthToken';
import { PopularThings } from '../popular/Popular';
import  history from '../../navigation/history';
import { Redirect, Route } from 'react-router';

const AuthenticationFlow = (props: AuthToken) => {
  if (props.token) {
    return <Redirect push={true} to={'/popular'} />;
  } else if (!props.token && extractCodeFromUrl()) {
    return <ValidateToken />;
  } else {
    return <RedirectAuth />;
  }
}

@observer
export class Auth extends Component {

  public render() {
    return (
      <AuthenticationFlow token={AuthStorage.bearer_token} />
    );
  }
}