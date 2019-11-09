import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface AuthToken {
  token: string
}

const GET_AUTH_TOKEN = gql`
  query getAuthToken($token: String!) {
    
  }
`;

export function retrieveToken(code: string) {
  const { loading, data } = useQuery<AuthToken, AuthToken>(
    GET_AUTH_TOKEN,
    { variables: { token: code } }
  );

  return data;
}