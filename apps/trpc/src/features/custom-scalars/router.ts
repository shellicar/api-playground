import { publicProcedure, router } from '../../trpc/trpc';
import { eventSchema, mutationEventsCreateInputSchema, queryEventsGetInputSchema } from './custom-scalars';
import { IMutationEventsCreateResolver, IQueryEventsGetResolver } from './interfaces';

export const customScalarsRouter = router({
  get: publicProcedure
    .input(queryEventsGetInputSchema)
    .output(eventSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEventsGetResolver).query(input);
    }),
  create: publicProcedure
    .input(mutationEventsCreateInputSchema)
    .output(eventSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.container.resolve(IMutationEventsCreateResolver).mutate(input);
    }),
});
