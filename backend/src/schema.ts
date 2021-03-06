import { gql, IExecutableSchemaDefinition } from 'apollo-server';
import { isArray, mergeWith } from 'lodash';
import thingResolvers from './thing/resolvers';
import dateResolvers from './utils/scalars/date/resolvers';
import authResolvers from './auth/resolvers';

// create our schema
function withArraysConcatenation(objValue: any, srcValue: any) {
  // if an array, concat it
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

// allows us to merge schemas
export const mergeRawSchemas = (...schemas: IExecutableSchemaDefinition[]):
  IExecutableSchemaDefinition => {
  return mergeWith({}, ...schemas, withArraysConcatenation);
};

export const rawSchemas = mergeRawSchemas(
  {
    typeDefs: [
      // we create empty main types, we can later extend them in specific resolvers
      gql`
        type Query {
            _empty: String
        }

        type Mutation {
            _empty: String
        }

        type Subscription {
            _empty: String
        }
      `,
    ],
    resolvers: {},
  },
  dateResolvers,
  thingResolvers,
  authResolvers,
);

export let schema = rawSchemas.typeDefs;
export let resolvers = rawSchemas.resolvers;
export let graphqlSchemas = rawSchemas;
