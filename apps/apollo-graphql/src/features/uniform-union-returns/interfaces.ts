import type { Holder, QueryHoldersGetInput, QueryHoldersListInput } from '../../generated/graphql';

export abstract class IQueryHoldersGetResolver {
  public abstract query(input: QueryHoldersGetInput): Promise<Holder | null>;
}

export abstract class IQueryHoldersListResolver {
  public abstract query(input: QueryHoldersListInput): Promise<Holder[]>;
}
