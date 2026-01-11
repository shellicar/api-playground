import type { Resolvers } from '../../generated/graphql';
import { IMutationEntitiesCreateResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver } from './interfaces';

export const nestedPolymorphismResolvers = {
  EntityQueries: {
    get: (_parent, { input }, { container }) => {
      return container.resolve(IQueryEntitiesGetResolver).query(input);
    },
    list: (_parent, { input }, { container }) => {
      return container.resolve(IQueryEntitiesListResolver).query(input);
    },
  },
  EntityMutations: {
    create: (_parent, { input }, { container }) => {
      return container.resolve(IMutationEntitiesCreateResolver).mutate(input);
    },
  },
} satisfies Pick<Resolvers, 'EntityQueries' | 'EntityMutations'>;
