import thingTypeDef from './typeDef';
import { getPopular } from './client';

export default {
  resolvers: {
    Query: {
      popular: () => getPopular(),
    },
    Mutation: {},
  },
  typeDefs: [thingTypeDef],
};
