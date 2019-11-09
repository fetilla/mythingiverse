import { gql } from 'apollo-server';

const typeDef = gql`
  type Thing {
    title: String
  }
  
  extend type Query {
    popular: [Thing]
  }
`;

export default typeDef;