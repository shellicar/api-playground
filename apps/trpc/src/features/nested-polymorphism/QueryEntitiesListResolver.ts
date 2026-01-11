import { IQueryEntitiesListResolver } from './interfaces';
import type { ListOutersInput, OuterConnection } from './nested-polymorphism-pagination';

export class QueryEntitiesListResolver extends IQueryEntitiesListResolver {
  public async query(_input: ListOutersInput): Promise<OuterConnection> {
    // TODO: Implement
    return {
      __typename: 'OuterConnection',
      nodes: [],
      pageInfo: { __typename: 'PageInfo', total: 0, count: 0, hasNextPage: false, endCursor: null },
    };
  }
}
