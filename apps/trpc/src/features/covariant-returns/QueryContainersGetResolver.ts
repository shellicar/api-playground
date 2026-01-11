import type { GetEntityInput } from '../nested-polymorphism/discriminated-inputs';
import type { Container } from './covariant-returns';
import { IQueryContainersGetResolver } from './interfaces';

export class QueryContainersGetResolver extends IQueryContainersGetResolver {
  public async query(_input: GetEntityInput): Promise<Container | null> {
    // TODO: Implement
    return null;
  }
}
