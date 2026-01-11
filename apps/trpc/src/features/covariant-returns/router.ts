import { publicProcedure, router } from '../../trpc/trpc';
import { getEntityInputSchema } from '../nested-polymorphism/discriminated-inputs';
import { containerSchema } from './covariant-returns';
import { containerConnectionSchema, listContainersInputSchema } from './covariant-returns-pagination';
import { IQueryContainersGetResolver, IQueryContainersListResolver } from './interfaces';

export const covariantReturnsRouter = router({
  get: publicProcedure
    .input(getEntityInputSchema)
    .output(containerSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryContainersGetResolver).query(input);
    }),
  list: publicProcedure
    .input(listContainersInputSchema)
    .output(containerConnectionSchema)
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryContainersListResolver).query(input);
    }),
});
