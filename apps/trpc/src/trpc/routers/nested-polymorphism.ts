import { IMutationEntitiesCreateResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver } from '../../services/resolvers/interfaces';
import { listOutersInputSchema, outerConnectionSchema } from '../schemas/cursor-pagination';
import { createEntityInputSchema, getEntityInputSchema } from '../schemas/discriminated-inputs';
import { outerSchema } from '../schemas/nested-polymorphism';
import { createEntityPayloadSchema } from '../schemas/result-unions';
import { publicProcedure, router } from '../trpc';

export const nestedPolymorphismRouter = router({
  get: publicProcedure.input(getEntityInputSchema).output(outerSchema.nullable()).query(async ({ ctx, input }) => {
    return ctx.container.resolve(IQueryEntitiesGetResolver).query(input);
  }),
  list: publicProcedure.input(listOutersInputSchema).output(outerConnectionSchema).query(async ({ ctx, input }) => {
    return ctx.container.resolve(IQueryEntitiesListResolver).query(input);
  }),
  create: publicProcedure.input(createEntityInputSchema).output(createEntityPayloadSchema).mutation(async ({ ctx, input }) => {
    return ctx.container.resolve(IMutationEntitiesCreateResolver).mutate(input);
  }),
});
