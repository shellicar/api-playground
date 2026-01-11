import type { HttpRequest, InvocationContext } from '@azure/functions';
import type { IResolutionScope } from '@shellicar/core-di';

export interface GraphQLContext {
  request: HttpRequest;
  context: InvocationContext;
  container: IResolutionScope;
}
