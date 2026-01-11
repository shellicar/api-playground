import type { Holder, QueryHoldersGetInput } from '../../generated/graphql';
import { IQueryHoldersGetResolver } from './interfaces';

export class QueryHoldersGetResolver extends IQueryHoldersGetResolver {
  public async query(_input: QueryHoldersGetInput): Promise<Holder | null> {
    // TODO: Implement
    return null;
  }
}
