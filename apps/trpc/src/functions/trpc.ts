import { app, type HttpRequest, type HttpResponseInit, type InvocationContext } from '@azure/functions';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { container } from '../core/container';
import { appRouter } from '../trpc/routers';

async function createWebRequest(azureRequest: HttpRequest): Promise<Request> {
  const path = azureRequest.params.path ?? '';
  const url = new URL(azureRequest.url);
  const trpcUrl = `${url.origin}/trpc/${path}${url.search}`;

  const method = azureRequest.method;
  const headers = new Headers();

  // Copy headers
  for (const [key, value] of Object.entries(azureRequest.headers)) {
    if (value) {
      headers.append(key, value);
    }
  }

  // Get body if present
  const body = method !== 'GET' && method !== 'HEAD' ? await azureRequest.text() : null;

  return new Request(trpcUrl, {
    method,
    headers,
    body,
  });
}

export async function trpcHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`tRPC request: ${request.method} ${request.url}`);

  const webRequest = await createWebRequest(request);

  const response = await fetchRequestHandler({
    endpoint: '/trpc',
    req: webRequest,
    router: appRouter,
    createContext: () => ({ container: container.createScope() }),
  });

  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
}

app.http('trpc', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'trpc/{*path}',
  handler: trpcHandler,
});
