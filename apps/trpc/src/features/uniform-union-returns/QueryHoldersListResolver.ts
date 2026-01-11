import { IQueryHoldersListResolver } from './interfaces';
import type { Holder, QueryHoldersListInput } from './uniform-union-returns';

export class QueryHoldersListResolver extends IQueryHoldersListResolver {
  public async query(_input: QueryHoldersListInput): Promise<Holder[]> {
    // TODO: Implement
    return [];
  }
}
