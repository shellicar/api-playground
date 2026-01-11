import type { Resolvers } from '../../../generated/graphql';
import { IQueryContainersGetResolver, IQueryContainersListResolver } from '../../../services/resolvers/interfaces';

export const covariantReturnsResolvers: Resolvers = {
  ContainerQueries: {
    get: (_parent, { input }, { container }) => {
      return container.resolve(IQueryContainersGetResolver).query(input);
    },
    list: (_parent, { input }, { container }) => {
      return container.resolve(IQueryContainersListResolver).query(input);
    },
  },
};
