import type { Resolvers } from '../../generated/graphql';
import { IQueryHoldersGetResolver, IQueryHoldersListResolver } from './interfaces';

export const uniformUnionReturnsResolvers = {
  HolderQueries: {
    get: (_parent, { input }, { container }) => {
      return container.resolve(IQueryHoldersGetResolver).query(input);
    },
    list: (_parent, { input }, { container }) => {
      return container.resolve(IQueryHoldersListResolver).query(input);
    },
  },
} satisfies Pick<Resolvers, 'HolderQueries'>;
