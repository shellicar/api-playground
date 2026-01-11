import { IQueryHealthResolver } from '../../services/resolvers/interfaces';
import { healthStatusSchema } from '../schemas/health';
import { publicProcedure, router } from '../trpc';
import { covariantReturnsRouter } from './covariant-returns';
import { customScalarsRouter } from './custom-scalars';
import { nestedPolymorphismRouter } from './nested-polymorphism';

export const appRouter = router({
  health: publicProcedure.output(healthStatusSchema).query(async ({ ctx }) => {
    return ctx.container.resolve(IQueryHealthResolver).query();
  }),
  entities: nestedPolymorphismRouter,
  containers: covariantReturnsRouter,
  events: customScalarsRouter,
});

export type AppRouter = typeof appRouter;
