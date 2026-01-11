import { ApolloServer } from '@apollo/server';
import typeDefs from '@shellicar/build-graphql/typedefs';
import { resolvers } from './resolvers';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  includeStacktraceInErrorResponses: false,
  introspection: true,
});

await server.start();
