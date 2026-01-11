import { createServiceCollection } from '@shellicar/core-di';
import { IQueryContainersGetResolver, IQueryContainersListResolver } from '../features/covariant-returns/interfaces';
import { QueryContainersGetResolver } from '../features/covariant-returns/QueryContainersGetResolver';
import { QueryContainersListResolver } from '../features/covariant-returns/QueryContainersListResolver';
import { IMutationEventsCreateResolver, IQueryEventsGetResolver } from '../features/custom-scalars/interfaces';
import { MutationEventsCreateResolver } from '../features/custom-scalars/MutationEventsCreateResolver';
import { QueryEventsGetResolver } from '../features/custom-scalars/QueryEventsGetResolver';
import { IQueryHealthResolver } from '../features/health/interfaces';
import { QueryHealthResolver } from '../features/health/QueryHealthResolver';
import { IMutationEntitiesCreateResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver } from '../features/nested-polymorphism/interfaces';
import { MutationEntitiesCreateResolver } from '../features/nested-polymorphism/MutationEntitiesCreateResolver';
import { QueryEntitiesGetResolver } from '../features/nested-polymorphism/QueryEntitiesGetResolver';
import { QueryEntitiesListResolver } from '../features/nested-polymorphism/QueryEntitiesListResolver';

const services = createServiceCollection();

// Register resolvers
services.register(IQueryHealthResolver).to(QueryHealthResolver).singleton();
services.register(IQueryEntitiesGetResolver).to(QueryEntitiesGetResolver).singleton();
services.register(IQueryEntitiesListResolver).to(QueryEntitiesListResolver).singleton();
services.register(IMutationEntitiesCreateResolver).to(MutationEntitiesCreateResolver).singleton();
services.register(IQueryContainersGetResolver).to(QueryContainersGetResolver).singleton();
services.register(IQueryContainersListResolver).to(QueryContainersListResolver).singleton();
services.register(IQueryEventsGetResolver).to(QueryEventsGetResolver).singleton();
services.register(IMutationEventsCreateResolver).to(MutationEventsCreateResolver).singleton();

export const container = services.buildProvider();
