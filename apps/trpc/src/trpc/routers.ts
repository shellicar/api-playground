import { covariantReturnsRouter } from '../features/covariant-returns/router';
import { customScalarsRouter } from '../features/custom-scalars/router';
import { healthRouter } from '../features/health/router';
import { nestedPolymorphismRouter } from '../features/nested-polymorphism/router';
import { uniformUnionReturnsRouter } from '../features/uniform-union-returns/router';
import { router } from './trpc';

export const appRouter = router({
  health: healthRouter,
  entities: nestedPolymorphismRouter,
  containers: covariantReturnsRouter,
  events: customScalarsRouter,
  holders: uniformUnionReturnsRouter,
});

export type AppRouter = typeof appRouter;
