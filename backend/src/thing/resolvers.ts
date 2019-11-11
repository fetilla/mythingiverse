import thingTypeDef from './typeDef';
import { thingsRequest } from './client';

export default {
  resolvers: {
    Query: {
      things: (root, args, context) => thingsRequest(context.token),
    },
    Mutation: {},
  },
  typeDefs: [thingTypeDef],
};
