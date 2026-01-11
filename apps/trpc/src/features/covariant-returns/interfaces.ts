import type { GetEntityInput } from '../nested-polymorphism/discriminated-inputs';
import type { Container } from './covariant-returns';
import type { ContainerConnection, ListContainersInput } from './covariant-returns-pagination';

export abstract class IQueryContainersGetResolver {
  public abstract query(input: GetEntityInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: ListContainersInput): Promise<ContainerConnection>;
}
