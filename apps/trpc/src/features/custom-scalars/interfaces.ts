import type { CreateEventInput, Event, GetEventInput } from './custom-scalars';

export abstract class IQueryEventsGetResolver {
  public abstract query(input: GetEventInput): Promise<Event | null>;
}

export abstract class IMutationEventsCreateResolver {
  public abstract mutate(input: CreateEventInput): Promise<Event>;
}
