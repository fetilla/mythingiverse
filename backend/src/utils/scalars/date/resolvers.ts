import dateTypeDef from './typeDef';
import { GraphQLScalarType, Kind } from 'graphql';

const resolverDate = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

export default {
  resolvers: resolverDate,
  typeDefs: [dateTypeDef],
};
