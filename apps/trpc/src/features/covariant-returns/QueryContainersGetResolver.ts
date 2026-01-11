import type { Container } from './covariant-returns';
import type { QueryContainersGetInput } from './covariant-returns-pagination';
import { IQueryContainersGetResolver } from './interfaces';

export class QueryContainersGetResolver extends IQueryContainersGetResolver {
  public async query(_input: QueryContainersGetInput): Promise<Container | null> {
    // TODO: Implement
    return null;
  }
}
