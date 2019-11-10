import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import * as _ from 'lodash';

interface AuthToken {
  token: string
}

const GET_AUTH_TOKEN = gql`
  mutation validateCodeGetToken($token: String!) {
    token
  }
`;

export function retrieveToken(code: string) {
   let [authToken, { error, data }] = useMutation<{token: string}, AuthToken>(
    GET_AUTH_TOKEN,
    { variables: { token: code } }
  );

  return !_.isNil(data) ? data!.token : undefined;
}