import type { Holder, QueryHoldersListInput } from '../../generated/graphql';
import { IQueryHoldersListResolver } from './interfaces';

export class QueryHoldersListResolver extends IQueryHoldersListResolver {
  public async query(_input: QueryHoldersListInput): Promise<Holder[]> {
    // TODO: Implement
    return [];
  }
}
