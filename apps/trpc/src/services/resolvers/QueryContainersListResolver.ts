import type { ContainerConnection, ListContainersInput } from '../../trpc/schemas/cursor-pagination';
import { IQueryContainersListResolver } from './interfaces';

export class QueryContainersListResolver extends IQueryContainersListResolver {
  public async query(input: ListContainersInput): Promise<ContainerConnection> {
    // TODO: Implement
    return {
      __typename: 'ContainerConnection',
      nodes: [],
      pageInfo: { __typename: 'PageInfo', total: 0, count: 0, hasNextPage: false, endCursor: null },
    };
  }
}
