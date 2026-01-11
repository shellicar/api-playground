import { IMutationEventsCreateResolver, IQueryEventsGetResolver } from '../../services/resolvers/interfaces';
import { createEventInputSchema, eventSchema, getEventInputSchema } from '../schemas/custom-scalars';
import { publicProcedure, router } from '../trpc';

export const customScalarsRouter = router({
  get: publicProcedure.input(getEventInputSchema).output(eventSchema.nullable()).query(async ({ ctx, input }) => {
    return ctx.container.resolve(IQueryEventsGetResolver).query(input);
  }),
  create: publicProcedure.input(createEventInputSchema).output(eventSchema).mutation(async ({ ctx, input }) => {
    return ctx.container.resolve(IMutationEventsCreateResolver).mutate(input);
  }),
});
