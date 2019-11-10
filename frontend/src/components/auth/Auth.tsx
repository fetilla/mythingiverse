import React, { Component } from 'react';
import AuthStorage from './AuthStorage';
import history from '../../navigation/history';
import * as _ from 'lodash';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';

const GET_AUTH_TOKEN = gql`
  mutation validateCodeGetToken($token: String!) {
    validateCodeGetToken(token: $token){
      token
    }
  }
`;

interface AuthToken {
  token: string
}

const ValidateToken = () => <Mutation<AuthToken, AuthToken> mutation={GET_AUTH_TOKEN}>
  {(authToken, { loading, data, error }) => {
    if(!loading) {
      if (!_.isNil(data) && !_.isNil(data.token)) {
        AuthStorage.bearer_token = data.token;
        history.push('/popular');
      } else {
        authToken({variables: {token: extractCodeFromUrl()!}});
      }
    }
    return <div/>;
  }}
</Mutation>

const Authenticate = () =>
{return _.isNil(AuthStorage.bearer_token) ? <ValidateToken/> : <div/>}

const extractCodeFromUrl = () => {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
}

export class Auth extends Component {

  public render() {
    return (
      <Authenticate/>
    );
  }
}