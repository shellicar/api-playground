import type { Resolvers } from '../../../generated/graphql';
import { IMutationEventsCreateResolver, IQueryEventsGetResolver } from '../../../services/resolvers/interfaces';

export const customScalarsResolvers = {
  EventQueries: {
    get: (_parent, { id }, { container }) => {
      return container.resolve(IQueryEventsGetResolver).query(id);
    },
  },
  EventMutations: {
    create: (_parent, { input }, { container }) => {
      return container.resolve(IMutationEventsCreateResolver).mutate(input);
    },
  },
} satisfies Pick<Resolvers, 'EventQueries' | 'EventMutations'>;
