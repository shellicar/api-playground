import type { QueryEntitiesGetInput } from './discriminated-inputs';
import { IQueryEntitiesGetResolver } from './interfaces';
import type { Outer } from './nested-polymorphism';

export class QueryEntitiesGetResolver extends IQueryEntitiesGetResolver {
  public async query(_input: QueryEntitiesGetInput): Promise<Outer | null> {
    // TODO: Implement
    return null;
  }
}
