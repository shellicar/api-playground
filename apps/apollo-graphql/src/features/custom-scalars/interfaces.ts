import type { CreateEventInput, Event } from '../../generated/graphql';

export abstract class IQueryEventsGetResolver {
  public abstract query(id: string): Promise<Event | null>;
}

export abstract class IMutationEventsCreateResolver {
  public abstract mutate(input: CreateEventInput): Promise<Event>;
}
