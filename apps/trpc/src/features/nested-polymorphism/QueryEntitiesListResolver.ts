import { IQueryEntitiesListResolver } from './interfaces';
import type { OuterConnection, QueryEntitiesListInput } from './nested-polymorphism-pagination';

export class QueryEntitiesListResolver extends IQueryEntitiesListResolver {
  public async query(_input: QueryEntitiesListInput): Promise<OuterConnection> {
    // TODO: Implement
    return {
      __typename: 'OuterConnection',
      nodes: [],
      pageInfo: { __typename: 'PageInfo', total: 0, count: 0, hasNextPage: false, endCursor: null },
    };
  }
}
