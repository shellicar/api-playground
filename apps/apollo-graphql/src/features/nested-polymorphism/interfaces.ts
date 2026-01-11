import type { CreateEntityInput, CreateEntityPayload, GetEntityInput, ListOutersInput, Outer, OuterConnection } from '../../generated/graphql';

export abstract class IQueryEntitiesGetResolver {
  public abstract query(input: GetEntityInput): Promise<Outer | null>;
}

export abstract class IQueryEntitiesListResolver {
  public abstract query(input: ListOutersInput): Promise<OuterConnection>;
}

export abstract class IMutationEntitiesCreateResolver {
  public abstract mutate(input: CreateEntityInput): Promise<CreateEntityPayload>;
}
