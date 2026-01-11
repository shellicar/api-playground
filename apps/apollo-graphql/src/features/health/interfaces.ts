import type { HealthStatus } from '../../generated/graphql';

export abstract class IQueryHealthResolver {
  public abstract query(): Promise<HealthStatus>;
}
