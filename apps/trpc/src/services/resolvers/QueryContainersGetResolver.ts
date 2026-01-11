import type { Container } from '../../trpc/schemas/covariant-returns';
import type { GetEntityInput } from '../../trpc/schemas/discriminated-inputs';
import { IQueryContainersGetResolver } from './interfaces';

export class QueryContainersGetResolver extends IQueryContainersGetResolver {
  public async query(input: GetEntityInput): Promise<Container | null> {
    // TODO: Implement
    return null;
  }
}
