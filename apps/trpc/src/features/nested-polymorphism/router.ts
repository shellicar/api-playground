import { publicProcedure, router } from '../../trpc/trpc';
import { mutationEntitiesCreateInputSchema, queryEntitiesGetInputSchema } from './discriminated-inputs';
import { IMutationEntitiesCreateResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver } from './interfaces';
import { outerSchema } from './nested-polymorphism';
import { createEntityPayloadSchema } from './nested-polymorphism-mutations';
import { outerConnectionSchema, queryEntitiesListInputSchema } from './nested-polymorphism-pagination';

export const nestedPolymorphismRouter = router({
  get: publicProcedure
    .input(queryEntitiesGetInputSchema)
    .output(outerSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEntitiesGetResolver).query(input);
    }),
  list: publicProcedure
    .input(queryEntitiesListInputSchema)
    .output(outerConnectionSchema)
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEntitiesListResolver).query(input);
    }),
  create: publicProcedure
    .input(mutationEntitiesCreateInputSchema)
    .output(createEntityPayloadSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.container.resolve(IMutationEntitiesCreateResolver).mutate(input);
    }),
});
