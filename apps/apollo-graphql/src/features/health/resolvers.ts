import type { Resolvers } from '../../generated/graphql';
import { IQueryHealthResolver } from './interfaces';

export const healthResolvers = {
  Query: {
    health: (_parent, _args, { container }) => {
      return container.resolve(IQueryHealthResolver).query();
    },
  },
} satisfies Pick<Resolvers, 'Query'>;
