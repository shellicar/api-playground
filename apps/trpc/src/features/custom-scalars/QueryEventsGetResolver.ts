import type { Event, GetEventInput } from './custom-scalars';
import { IQueryEventsGetResolver } from './interfaces';

export class QueryEventsGetResolver extends IQueryEventsGetResolver {
  public async query(_input: GetEventInput): Promise<Event | null> {
    // TODO: Implement
    return null;
  }
}
