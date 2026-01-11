import type { Container, ContainerConnection, CreateEntityInput, CreateEntityPayload, CreateEventInput, Event, GetEntityInput, HealthStatus, ListContainersInput, ListOutersInput, Outer, OuterConnection } from '../../generated/graphql';

export abstract class IQueryHealthResolver {
  public abstract query(): Promise<HealthStatus>;
}

export abstract class IQueryContainersGetResolver {
  public abstract query(input: GetEntityInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: ListContainersInput): Promise<ContainerConnection>;
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

export abstract class IQueryEventsGetResolver {
  public abstract query(id: string): Promise<Event | null>;
}

export abstract class IMutationEventsCreateResolver {
  public abstract mutate(input: CreateEventInput): Promise<Event>;
}
