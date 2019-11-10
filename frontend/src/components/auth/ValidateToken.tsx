import { Mutation } from '@apollo/react-components';
import * as _ from 'lodash';
import AuthStorage from './AuthStorage';
import history from '../../navigation/history';
import React from 'react';
import gql from 'graphql-tag';

const GET_AUTH_TOKEN = gql`
  mutation validateCodeGetToken($token: String!) {
    validateCodeGetToken(token: $token){
      token
    }
  }
`;

interface ValidateCodeGetToken {
  token: string
}

interface AuthToken {
  validateCodeGetToken: ValidateCodeGetToken
}


const ValidateToken = () => <Mutation<AuthToken, ValidateCodeGetToken> mutation={GET_AUTH_TOKEN}>
  {(authToken, { loading, data, error }) => {
    if(!loading) {
      if(_.isNil(data)){
        authToken({variables: {token: extractCodeFromUrl()!}});
      } else if (!_.isNil(data.validateCodeGetToken.token)){
        AuthStorage.bearer_token = data.validateCodeGetToken.token;
      }
    }
    return <div/>;
  }}
</Mutation>

const extractCodeFromUrl = () => {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
}

export {extractCodeFromUrl, ValidateToken}