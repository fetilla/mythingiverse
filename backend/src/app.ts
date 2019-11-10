import { ApolloServer, Config } from 'apollo-server';
import { graphqlSchemas } from './schema';
import { makeExecutableSchema } from 'graphql-tools';

let schemas = makeExecutableSchema(graphqlSchemas);

const apolloConfig: Config = {
  schema: schemas,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { token };
  }
};

const server = new ApolloServer(apolloConfig);

// Start the server
server.listen(4000, () => {
  console.log('App listening');
});