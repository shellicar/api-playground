import type { HealthStatus } from './health';

export abstract class IQueryHealthResolver {
  public abstract query(): Promise<HealthStatus>;
}
