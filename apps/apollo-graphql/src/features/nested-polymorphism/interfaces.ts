import type { CreateEntityPayload, MutationEntitiesCreateInput, Outer, OuterConnection, QueryEntitiesGetInput, QueryEntitiesListInput } from '../../generated/graphql';

export abstract class IQueryEntitiesGetResolver {
  public abstract query(input: QueryEntitiesGetInput): Promise<Outer | null>;
}

export abstract class IQueryEntitiesListResolver {
  public abstract query(input: QueryEntitiesListInput): Promise<OuterConnection>;
}

export abstract class IMutationEntitiesCreateResolver {
  public abstract mutate(input: MutationEntitiesCreateInput): Promise<CreateEntityPayload>;
}
