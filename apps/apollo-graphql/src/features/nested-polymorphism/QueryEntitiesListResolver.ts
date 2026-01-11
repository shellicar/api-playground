import type { OuterConnection, QueryEntitiesListInput } from '../../generated/graphql';
import { IQueryEntitiesListResolver } from './interfaces';

export class QueryEntitiesListResolver extends IQueryEntitiesListResolver {
  public async query(_input: QueryEntitiesListInput): Promise<OuterConnection> {
    // TODO: Implement actual pagination
    return {
      __typename: 'OuterConnection',
      nodes: [],
      pageInfo: {
        __typename: 'PageInfo',
        total: 0,
        count: 0,
        hasNextPage: false,
        endCursor: null,
      },
    };
  }
}
