import type { Event, GetEventInput } from '../../trpc/schemas/custom-scalars';
import { IQueryEventsGetResolver } from './interfaces';

export class QueryEventsGetResolver extends IQueryEventsGetResolver {
  public async query(input: GetEventInput): Promise<Event | null> {
    // TODO: Implement
    return null;
  }
}
