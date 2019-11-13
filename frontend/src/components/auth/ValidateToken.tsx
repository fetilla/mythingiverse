import { Mutation } from '@apollo/react-components';
import AuthStorage from './Auth.storage';
import React from 'react';
import gql from 'graphql-tag';
import { ValidateCodeGetToken, AuthToken } from './Auth.interfaces';

const VALIDATE_TOKEN_MUTATION = gql`
  mutation validateCodeGetToken($token: String!) {
    validateCodeGetToken(token: $token){
      token
    }
  }
`;

const ValidateToken = () => (
  <Mutation<ValidateCodeGetToken, AuthToken> mutation={VALIDATE_TOKEN_MUTATION}>
  {
    (authToken, { loading, data, error }) => {
    if(loading) return <p>Authentication in process...</p>;
    if(error) return <p>Error authentication</p>;
    if(!data){
        authToken({variables: {token: extractCodeFromUrl()!}});
    } else if (data.validateCodeGetToken.token){
      AuthStorage.bearer_token = data.validateCodeGetToken.token;
    }
    return null;
  }}
</Mutation>);

const extractCodeFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
};

export {extractCodeFromUrl, ValidateToken};