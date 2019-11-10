import thingTypeDef from './typeDef';
import { getPopular } from './client';

export default {
  resolvers: {
    Query: {
      popular: (root, args, context) => getPopular(root, args, context),
    },
    Mutation: {},
  },
  typeDefs: [thingTypeDef],
};
