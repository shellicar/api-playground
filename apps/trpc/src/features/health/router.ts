import { publicProcedure } from '../../trpc/trpc';
import { healthStatusSchema } from './health';
import { IQueryHealthResolver } from './interfaces';

export const healthRouter = publicProcedure.output(healthStatusSchema).query(async ({ ctx }) => {
  return ctx.container.resolve(IQueryHealthResolver).query();
});
