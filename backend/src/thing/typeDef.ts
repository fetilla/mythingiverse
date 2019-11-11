import { gql } from 'apollo-server';

const typeDef = gql`
  type Creator {
    id: ID,
    name: String,
    first_name: String,
    last_name: String,
    url: String,
    public_url: String,
    thumbnail: String
  }
  
  type DefaultImage {
    id: ID,
    url: String,
    name: String,
    added: Date,
  }


  type Thing {
    id: ID,
    name: String,
    url: String,
    public_url: String,
    thumbnail: String,
    creator: Creator,
    is_private: Boolean,
    is_purchased: Boolean,
    is_published: Boolean,
  }
  
  extend type Query {
    things: [Thing]
  }
`;

export default typeDef;