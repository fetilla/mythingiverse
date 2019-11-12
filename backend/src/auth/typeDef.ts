import { gql } from 'apollo-server';

const typeDef = gql`
  type AuthToken {
    token: String
  }

  extend type Mutation {
    validateCodeGetToken(token: String!): AuthToken
  }
`;

export default typeDef;
