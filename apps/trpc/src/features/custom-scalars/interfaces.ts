import type { Event, MutationEventsCreateInput, QueryEventsGetInput } from './custom-scalars';

export abstract class IQueryEventsGetResolver {
  public abstract query(input: QueryEventsGetInput): Promise<Event | null>;
}

export abstract class IMutationEventsCreateResolver {
  public abstract mutate(input: MutationEventsCreateInput): Promise<Event>;
}
