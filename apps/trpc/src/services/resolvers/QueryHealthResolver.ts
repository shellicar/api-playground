import { Instant } from '@js-joda/core';
import type { HealthStatus } from '../../trpc/schemas/health';
import { IQueryHealthResolver } from './interfaces';

export class QueryHealthResolver extends IQueryHealthResolver {
  public async query(): Promise<HealthStatus> {
    return {
      status: 'OK',
      timestamp: Instant.now(),
    };
  }
}
