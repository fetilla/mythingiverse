import { Mutation } from '@apollo/react-components';
import AuthStorage from './AuthStorage';
import React from 'react';
import gql from 'graphql-tag';
import history  from '../../navigation/history'

const VALIDATE_TOKEN_MUTATION = gql`
  mutation validateCodeGetToken($token: String!) {
    validateCodeGetToken(token: $token){
      token
    }
  }
`;

interface ValidateCodeGetToken {
  token: string;
}

interface AuthToken {
  validateCodeGetToken: ValidateCodeGetToken;
}


const ValidateToken = () => <Mutation<AuthToken, ValidateCodeGetToken> mutation={VALIDATE_TOKEN_MUTATION}>
  {(authToken, { loading, data, error }) => {
    if(loading) return <p>Authentication in process...</p>;
    if(error) return <p>Error authentication</p>;
    if(!data){
        authToken({variables: {token: extractCodeFromUrl()!}});
    } else if (data.validateCodeGetToken.token){
      AuthStorage.bearer_token = data.validateCodeGetToken.token;
    }
    return null;
  }}
</Mutation>

const extractCodeFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
}

export {extractCodeFromUrl, ValidateToken};