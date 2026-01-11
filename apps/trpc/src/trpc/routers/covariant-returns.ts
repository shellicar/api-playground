import { IQueryContainersGetResolver, IQueryContainersListResolver } from '../../services/resolvers/interfaces';
import { containerConnectionSchema, listContainersInputSchema } from '../schemas/cursor-pagination';
import { containerSchema } from '../schemas/covariant-returns';
import { getEntityInputSchema } from '../schemas/discriminated-inputs';
import { publicProcedure, router } from '../trpc';

export const covariantReturnsRouter = router({
  get: publicProcedure.input(getEntityInputSchema).output(containerSchema.nullable()).query(async ({ ctx, input }) => {
    return ctx.container.resolve(IQueryContainersGetResolver).query(input);
  }),
  list: publicProcedure.input(listContainersInputSchema).output(containerConnectionSchema).query(async ({ ctx, input }) => {
    return ctx.container.resolve(IQueryContainersListResolver).query(input);
  }),
});
