import { publicProcedure, router } from '../../trpc/trpc';
import { createEventInputSchema, eventSchema, getEventInputSchema } from './custom-scalars';
import { IMutationEventsCreateResolver, IQueryEventsGetResolver } from './interfaces';

export const customScalarsRouter = router({
  get: publicProcedure
    .input(getEventInputSchema)
    .output(eventSchema.nullable())
    .query(async ({ ctx, input }) => {
      return ctx.container.resolve(IQueryEventsGetResolver).query(input);
    }),
  create: publicProcedure
    .input(createEventInputSchema)
    .output(eventSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.container.resolve(IMutationEventsCreateResolver).mutate(input);
    }),
});
