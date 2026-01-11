import type { Container, ContainerConnection, QueryContainersGetInput, QueryContainersListInput } from '../../generated/graphql';

export abstract class IQueryContainersGetResolver {
  public abstract query(input: QueryContainersGetInput): Promise<Container | null>;
}

export abstract class IQueryContainersListResolver {
  public abstract query(input: QueryContainersListInput): Promise<ContainerConnection>;
}
