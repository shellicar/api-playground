import type { MutationEntitiesCreateInput, QueryEntitiesGetInput } from './discriminated-inputs';
import type { Outer } from './nested-polymorphism';
import type { CreateEntityPayload } from './nested-polymorphism-mutations';
import type { OuterConnection, QueryEntitiesListInput } from './nested-polymorphism-pagination';

export abstract class IQueryEntitiesGetResolver {
  public abstract query(input: QueryEntitiesGetInput): Promise<Outer | null>;
}

export abstract class IQueryEntitiesListResolver {
  public abstract query(input: QueryEntitiesListInput): Promise<OuterConnection>;
}

export abstract class IMutationEntitiesCreateResolver {
  public abstract mutate(input: MutationEntitiesCreateInput): Promise<CreateEntityPayload>;
}
