import dateTypeDef from './typeDef';
import { GraphQLScalarType, Kind } from 'graphql';

const resolverDate = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return new Date(value); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
};

export default {
  resolvers: resolverDate,
  typeDefs: [dateTypeDef],
};
