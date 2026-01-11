import type { GetEntityInput } from '../../trpc/schemas/discriminated-inputs';
import type { Outer } from '../../trpc/schemas/nested-polymorphism';
import { IQueryEntitiesGetResolver } from './interfaces';

export class QueryEntitiesGetResolver extends IQueryEntitiesGetResolver {
  public async query(input: GetEntityInput): Promise<Outer | null> {
    // TODO: Implement
    return null;
  }
}
