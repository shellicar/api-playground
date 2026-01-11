import type { ContainerConnection, ListContainersInput } from '../../generated/graphql';
import { IQueryContainersListResolver } from './interfaces';

export class QueryContainersListResolver extends IQueryContainersListResolver {
  public async query(_input: ListContainersInput): Promise<ContainerConnection> {
    // TODO: Implement actual pagination
    return {
      __typename: 'ContainerConnection',
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
