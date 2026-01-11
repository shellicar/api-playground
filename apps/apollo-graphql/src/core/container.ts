import { createServiceCollection } from '@shellicar/core-di';
import { IMutationEntitiesCreateResolver, IMutationEventsCreateResolver, IQueryContainersGetResolver, IQueryContainersListResolver, IQueryEntitiesGetResolver, IQueryEntitiesListResolver, IQueryEventsGetResolver } from '../services/resolvers/interfaces';
import { MutationEntitiesCreateResolver } from '../services/resolvers/MutationEntitiesCreateResolver';
import { MutationEventsCreateResolver } from '../services/resolvers/MutationEventsCreateResolver';
import { QueryContainersGetResolver } from '../services/resolvers/QueryContainersGetResolver';
import { QueryContainersListResolver } from '../services/resolvers/QueryContainersListResolver';
import { QueryEntitiesGetResolver } from '../services/resolvers/QueryEntitiesGetResolver';
import { QueryEntitiesListResolver } from '../services/resolvers/QueryEntitiesListResolver';
import { QueryEventsGetResolver } from '../services/resolvers/QueryEventsGetResolver';

const services = createServiceCollection();

// Register resolvers
services.register(IQueryContainersGetResolver).to(QueryContainersGetResolver).singleton();
services.register(IQueryContainersListResolver).to(QueryContainersListResolver).singleton();
services.register(IQueryEntitiesGetResolver).to(QueryEntitiesGetResolver).singleton();
services.register(IQueryEntitiesListResolver).to(QueryEntitiesListResolver).singleton();
services.register(IMutationEntitiesCreateResolver).to(MutationEntitiesCreateResolver).singleton();
services.register(IQueryEventsGetResolver).to(QueryEventsGetResolver).singleton();
services.register(IMutationEventsCreateResolver).to(MutationEventsCreateResolver).singleton();

export const container = services.buildProvider();
