import { Instant, LocalDate } from '@js-joda/core';
import type { Event, MutationEventsCreateInput } from '../../generated/graphql';
import { IMutationEventsCreateResolver } from './interfaces';

export class MutationEventsCreateResolver extends IMutationEventsCreateResolver {
  public async mutate(input: MutationEventsCreateInput): Promise<Event> {
    // Verify that scalars were properly parsed
    if (!(input.createdAt instanceof Instant)) {
      throw new Error(`Expected createdAt to be Instant, got: ${typeof input.createdAt}`);
    }
    if (!(input.eventDate instanceof LocalDate)) {
      throw new Error(`Expected eventDate to be LocalDate, got: ${typeof input.eventDate}`);
    }

    // TODO: Implement actual data persistence
    return {
      __typename: 'Event',
      id: 'new-event-id',
      name: input.name,
      createdAt: input.createdAt,
      eventDate: input.eventDate,
    };
  }
}
