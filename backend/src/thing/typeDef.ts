import { gql } from 'apollo-server';

const typeDef = gql`
  type Thing {
    id: ID,
    name: String
    url: String
    public_url: String
    thumbnail: String
    creator: Creator
    is_private: Boolean,
    is_purchased: Boolean,
    is_published: Boolean
  }
  
  type Creator {
    id: ID,
    name: String,
    first_name: String,
    last_name: String,
    url: String,
    public_url: String,
    thumbnail: String
  },
  
  extend type Query {
    thingQuery: [Thing]
  }
`;

export default typeDef;