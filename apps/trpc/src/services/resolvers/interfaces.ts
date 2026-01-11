import type { Container } from '../../trpc/schemas/covariant-returns';
import type { ContainerConnection, ListContainersInput, ListOutersInput, OuterConnection } from '../../trpc/schemas/cursor-pagination';
import type { CreateEventInput, Event, GetEventInput } from '../../trpc/schemas/custom-scalars';
import type { CreateEntityInput, GetEntityInput } from '../../trpc/schemas/discriminated-inputs';
import type { HealthStatus } from '../../trpc/schemas/health';
import type { Outer } from '../../trpc/schemas/nested-polymorphism';
import type { CreateEntityPayload } from '../../trpc/schemas/result-unions';

export abstract class IQueryHealthResolver {
  public abstract query(): Promise<HealthStatus>;
}

export abstract class IQueryEntitiesGetResolver {
  public abstract query(input: GetEntityInput): Promise<Outer | null>;
}

export abstract class IQueryEntitiesListResolver {
  public abstract query(input: ListOutersInput): Promise<OuterConnection>;
}

export abstract class IMutationEntitiesCreateResolver {
  public abstract mutate(input: CreateEntityInput): Promise<CreateEntityPayload>;
}

export abstract class IQueryContainersGetResolver {
  public abstract query(input: GetEntityInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: ListContainersInput): Promise<ContainerConnection>;
}

export abstract class IQueryEventsGetResolver {
  public abstract query(input: GetEventInput): Promise<Event | null>;
}

export abstract class IMutationEventsCreateResolver {
  public abstract mutate(input: CreateEventInput): Promise<Event>;
}
