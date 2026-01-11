import { publicProcedure, router } from '../../trpc/trpc';
import { IQueryHoldersGetResolver, IQueryHoldersListResolver } from './interfaces';
import { holderSchema, queryHoldersGetInputSchema, queryHoldersListInputSchema } from './uniform-union-returns';

export const uniformUnionReturnsRouter = router({
  get: publicProcedure
    .input(queryHoldersGetInputSchema)
    .output(holderSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryHoldersGetResolver).query(input);
    }),
  list: publicProcedure
    .input(queryHoldersListInputSchema)
    .output(holderSchema.array())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryHoldersListResolver).query(input);
    }),
});
