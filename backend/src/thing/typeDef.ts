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

  type ThingDetail {
    id: ID,
    name: String,
    url: String,
    public_url: String,
    thumbnail: String,
    creator: Creator,
    is_private: Boolean,
    is_purchased: Boolean,
    is_published: Boolean,
    added: Date,
    modified: Date,
    is_wip: Boolean,
    is_featured: Boolean,
    like_count: Int,
    is_liked: Boolean,
    collect_count: Int,
    is_collected: Boolean,
    default_image: DefaultImage,
    description_html: String,
    details: String,
    license: String,
    file_count: Int,
    layout_count: Int,
    in_library: Boolean,
    print_history_count: Int,
    download_count: Int,
    view_count: Int,
  }

  extend type Query {
    things: [Thing],
    thingDetailById(id: Int!): ThingDetail,
  }
`;

export default typeDef;
