import type { CreateEntityInput, GetEntityInput } from './discriminated-inputs';
import type { Outer } from './nested-polymorphism';
import type { CreateEntityPayload } from './nested-polymorphism-mutations';
import type { ListOutersInput, OuterConnection } from './nested-polymorphism-pagination';

export abstract class IQueryEntitiesGetResolver {
  public abstract query(input: GetEntityInput): Promise<Outer | null>;
}

export abstract class IQueryEntitiesListResolver {
  public abstract query(input: ListOutersInput): Promise<OuterConnection>;
}

export abstract class IMutationEntitiesCreateResolver {
  public abstract mutate(input: CreateEntityInput): Promise<CreateEntityPayload>;
}
