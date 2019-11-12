import thingTypeDef from './typeDef';
import { thingDetailRequest, thingsRequest } from './client';
import { ThingId } from './Thing';

export default {
  resolvers: {
    Query: {
      things: (root, args, context) => thingsRequest(context.token),
      thingDetailById: (root, args: ThingId, context) => thingDetailRequest(context.token, args.id),
    },
    Mutation: {},
  },
  typeDefs: [thingTypeDef],
};
