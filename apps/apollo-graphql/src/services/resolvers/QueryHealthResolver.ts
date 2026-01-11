import { Instant } from '@js-joda/core';
import type { HealthStatus } from '../../generated/graphql';
import { IQueryHealthResolver } from './interfaces';

export class QueryHealthResolver extends IQueryHealthResolver {
  public async query(): Promise<HealthStatus> {
    return {
      __typename: 'HealthStatus',
      status: 'OK',
      timestamp: Instant.now(),
    };
  }
}
