import { publicProcedure, router } from '../../trpc/trpc';
import { createEntityInputSchema, getEntityInputSchema } from './discriminated-inputs';
import { IMutationEntitiesCreateResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver } from './interfaces';
import { outerSchema } from './nested-polymorphism';
import { createEntityPayloadSchema } from './nested-polymorphism-mutations';
import { listOutersInputSchema, outerConnectionSchema } from './nested-polymorphism-pagination';

export const nestedPolymorphismRouter = router({
  get: publicProcedure
    .input(getEntityInputSchema)
    .output(outerSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEntitiesGetResolver).query(input);
    }),
  list: publicProcedure
    .input(listOutersInputSchema)
    .output(outerConnectionSchema)
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEntitiesListResolver).query(input);
    }),
  create: publicProcedure
    .input(createEntityInputSchema)
    .output(createEntityPayloadSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.container.resolve(IMutationEntitiesCreateResolver).mutate(input);
    }),
});
