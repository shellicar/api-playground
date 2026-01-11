import { v4 } from '@as-integrations/azure-functions';
import { app } from '@azure/functions';
import { container } from '../core/container';
import { server } from '../core/graphql/server';

const graphqlHandler = v4.startServerAndCreateHandler(server, {
  context: async ({ context, req }) => ({
    request: req,
    context,
    container: container.createScope(),
  }),
});

app.http('graphql', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: graphqlHandler,
});
