import type { ListOutersInput, OuterConnection } from '../../trpc/schemas/cursor-pagination';
import { IQueryEntitiesListResolver } from './interfaces';

export class QueryEntitiesListResolver extends IQueryEntitiesListResolver {
  public async query(input: ListOutersInput): Promise<OuterConnection> {
    // TODO: Implement
    return {
      __typename: 'OuterConnection',
      nodes: [],
      pageInfo: { __typename: 'PageInfo', total: 0, count: 0, hasNextPage: false, endCursor: null },
    };
  }
}
