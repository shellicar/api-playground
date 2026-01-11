import type { Container } from './covariant-returns';
import type { ContainerConnection, QueryContainersGetInput, QueryContainersListInput } from './covariant-returns-pagination';

export abstract class IQueryContainersGetResolver {
  public abstract query(input: QueryContainersGetInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: QueryContainersListInput): Promise<ContainerConnection>;
}
