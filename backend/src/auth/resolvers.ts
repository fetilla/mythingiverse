import authTypeDef from './typeDef';
import { validateCodeGetToken } from './client';
import { AuthToken } from './AuthToken';

export default {
  resolvers: {
    Query: {},
    Mutation: {
       validateCodeGetToken: (parent, args: AuthToken, {}) => {
        return validateCodeGetToken(args.token);
      },
    },
  },
  typeDefs: [authTypeDef],
};
