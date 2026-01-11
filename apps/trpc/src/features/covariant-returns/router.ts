import { publicProcedure, router } from '../../trpc/trpc';
import { containerSchema } from './covariant-returns';
import { containerConnectionSchema, queryContainersGetInputSchema, queryContainersListInputSchema } from './covariant-returns-pagination';
import { IQueryContainersGetResolver, IQueryContainersListResolver } from './interfaces';

export const covariantReturnsRouter = router({
  get: publicProcedure
    .input(queryContainersGetInputSchema)
    .output(containerSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryContainersGetResolver).query(input);
    }),
  list: publicProcedure
    .input(queryContainersListInputSchema)
    .output(containerConnectionSchema)
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryContainersListResolver).query(input);
    }),
});
