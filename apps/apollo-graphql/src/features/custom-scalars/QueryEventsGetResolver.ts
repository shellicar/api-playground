import { Instant, LocalDate } from '@js-joda/core';
import type { Event } from '../../generated/graphql';
import { IQueryEventsGetResolver } from './interfaces';

export class QueryEventsGetResolver extends IQueryEventsGetResolver {
  public async query(id: string): Promise<Event | null> {
    // TODO: Implement actual data fetching
    return {
      __typename: 'Event',
      id,
      name: 'Test Event',
      createdAt: Instant.parse('2024-03-15T10:30:00Z'),
      eventDate: LocalDate.parse('2024-12-25'),
    };
  }
}
