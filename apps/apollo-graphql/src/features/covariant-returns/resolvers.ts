import type { Resolvers } from '../../generated/graphql';
import { IQueryContainersGetResolver, IQueryContainersListResolver } from './interfaces';

export const covariantReturnsResolvers = {
  ContainerQueries: {
    get: (_parent, { input }, { container }) => {
      return container.resolve(IQueryContainersGetResolver).query(input);
    },
    list: (_parent, { input }, { container }) => {
      return container.resolve(IQueryContainersListResolver).query(input);
    },
  },
} satisfies Pick<Resolvers, 'ContainerQueries'>;
