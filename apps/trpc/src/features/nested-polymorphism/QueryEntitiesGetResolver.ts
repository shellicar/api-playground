import type { GetEntityInput } from './discriminated-inputs';
import { IQueryEntitiesGetResolver } from './interfaces';
import type { Outer } from './nested-polymorphism';

export class QueryEntitiesGetResolver extends IQueryEntitiesGetResolver {
  public async query(_input: GetEntityInput): Promise<Outer | null> {
    // TODO: Implement
    return null;
  }
}
