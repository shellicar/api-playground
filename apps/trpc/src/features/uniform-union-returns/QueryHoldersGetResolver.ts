import { IQueryHoldersGetResolver } from './interfaces';
import type { Holder, QueryHoldersGetInput } from './uniform-union-returns';

export class QueryHoldersGetResolver extends IQueryHoldersGetResolver {
  public async query(_input: QueryHoldersGetInput): Promise<Holder | null> {
    // TODO: Implement
    return null;
  }
}
