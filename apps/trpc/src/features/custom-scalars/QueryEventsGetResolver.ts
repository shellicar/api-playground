import type { Event, QueryEventsGetInput } from './custom-scalars';
import { IQueryEventsGetResolver } from './interfaces';

export class QueryEventsGetResolver extends IQueryEventsGetResolver {
  public async query(_input: QueryEventsGetInput): Promise<Event | null> {
    // TODO: Implement
    return null;
  }
}
