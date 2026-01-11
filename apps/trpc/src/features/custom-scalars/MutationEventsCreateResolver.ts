import type { CreateEventInput, Event } from './custom-scalars';
import { IMutationEventsCreateResolver } from './interfaces';

export class MutationEventsCreateResolver extends IMutationEventsCreateResolver {
  public async mutate(input: CreateEventInput): Promise<Event> {
    // TODO: Implement
    return {
      __typename: 'Event',
      id: 'test-id',
      name: input.name,
      createdAt: input.createdAt,
      eventDate: input.eventDate,
    };
  }
}
