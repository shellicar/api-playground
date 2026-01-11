import { app, type HttpRequest, type HttpResponseInit, type InvocationContext } from '@azure/functions';

export async function health(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'OK' }),
  };
}

app.http('health', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: health,
});
