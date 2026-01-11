import type { Container, ContainerConnection, GetEntityInput, ListContainersInput } from '../../generated/graphql';

export abstract class IQueryContainersGetResolver {
  public abstract query(input: GetEntityInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: ListContainersInput): Promise<ContainerConnection>;
}
