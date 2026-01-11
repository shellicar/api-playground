import type { Instant } from '@js-joda/core';
import type { LocalDate } from '@js-joda/core';
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GraphQLContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: string; output: string; }
  Instant: { input: Instant; output: Instant; }
  LocalDate: { input: LocalDate; output: LocalDate; }
  UUID: { input: string; output: string; }
  Void: { input: undefined; output: undefined; }
};

export type AuthorizationProblem = IMutationProblem & {
  __typename: 'AuthorizationProblem';
  message: Scalars['String']['output'];
  requiredPermission: Scalars['String']['output'];
};

export type Container = ContainerX | ContainerY;

export type ContainerConnection = {
  __typename: 'ContainerConnection';
  nodes: Array<Container>;
  pageInfo: PageInfo;
};

export type ContainerQueries = {
  __typename: 'ContainerQueries';
  get?: Maybe<Container>;
  list: ContainerConnection;
};


export type ContainerQueriesGetArgs = {
  input: GetEntityInput;
};


export type ContainerQueriesListArgs = {
  input: ListContainersInput;
};

export type ContainerX = IContainer & INode & {
  __typename: 'ContainerX';
  detail?: Maybe<DetailA>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type ContainerY = IContainer & INode & {
  __typename: 'ContainerY';
  detail?: Maybe<DetailB>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type CreateContainerFailure = {
  __typename: 'CreateContainerFailure';
  errors: Array<MutationProblem>;
  status: FailureReason;
};

export type CreateContainerPayload = CreateContainerFailure | CreateContainerSuccess;

export type CreateContainerSuccess = {
  __typename: 'CreateContainerSuccess';
  container: Container;
  recordId: Scalars['UUID']['output'];
};

export type CreateEntityFailure = {
  __typename: 'CreateEntityFailure';
  errors: Array<MutationProblem>;
  status: FailureReason;
};

export type CreateEntityInput =
  { optionA: CreateOptionAData; optionB?: never; }
  |  { optionA?: never; optionB: CreateOptionBData; };

export type CreateEntityPayload = CreateEntityFailure | CreateEntitySuccess;

/**
 * Result Unions: Success/Failure pattern for mutations with structured error handling.
 * Pattern: MutationPayload = SuccessType | FailureType
 */
export type CreateEntitySuccess = {
  __typename: 'CreateEntitySuccess';
  entity: Outer;
  recordId: Scalars['UUID']['output'];
};

export type CreateEventInput = {
  createdAt: Scalars['Instant']['input'];
  eventDate: Scalars['LocalDate']['input'];
  name: Scalars['String']['input'];
};

/**
 * Discriminated Input Unions: @oneOf directive for type-safe discriminated inputs in mutations.
 * Pattern: CreateEntityInput { optionA: DataA | optionB: DataB }
 */
export type CreateOptionAData = {
  name: Scalars['String']['input'];
  valueA: Scalars['String']['input'];
};

export type CreateOptionBData = {
  name: Scalars['String']['input'];
  valueB: Scalars['Int']['input'];
};

export type Detail = DetailA | DetailB;

export type DetailA = IDetail & INode & {
  __typename: 'DetailA';
  id: Scalars['UUID']['output'];
  specificA: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type DetailB = IDetail & INode & {
  __typename: 'DetailB';
  id: Scalars['UUID']['output'];
  specificB: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type EntityMutations = {
  __typename: 'EntityMutations';
  create: CreateEntityPayload;
};


export type EntityMutationsCreateArgs = {
  input: CreateEntityInput;
};

export type EntityQueries = {
  __typename: 'EntityQueries';
  get?: Maybe<Outer>;
  list: OuterConnection;
};


export type EntityQueriesGetArgs = {
  input: GetEntityInput;
};


export type EntityQueriesListArgs = {
  input: ListOutersInput;
};

/**
 * Custom Scalars: Testing serialization/deserialization of custom scalar types.
 * Pattern: Instant (timestamp) and LocalDate (date-only) scalars with @js-joda/core
 */
export type Event = INode & {
  __typename: 'Event';
  createdAt: Scalars['Instant']['output'];
  eventDate: Scalars['LocalDate']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type EventMutations = {
  __typename: 'EventMutations';
  create: Event;
};


export type EventMutationsCreateArgs = {
  input: CreateEventInput;
};

export type EventQueries = {
  __typename: 'EventQueries';
  get?: Maybe<Event>;
};


export type EventQueriesGetArgs = {
  id: Scalars['UUID']['input'];
};

export enum FailureReason {
  InvalidInput = 'INVALID_INPUT',
  InvalidState = 'INVALID_STATE',
  NotFound = 'NOT_FOUND',
  SystemError = 'SYSTEM_ERROR',
  Unauthorised = 'UNAUTHORISED',
  UpdateConflict = 'UPDATE_CONFLICT'
}

export type GeneralProblem = IMutationProblem & {
  __typename: 'GeneralProblem';
  details: Array<GeneralProblemDetails>;
  message: Scalars['String']['output'];
};

export type GeneralProblemDetails = IMutationProblemDetails & {
  __typename: 'GeneralProblemDetails';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type GetEntityInput = {
  id: Scalars['UUID']['input'];
};

/** Health check query for service monitoring. */
export type HealthStatus = {
  __typename: 'HealthStatus';
  status: Scalars['String']['output'];
  timestamp: Scalars['Instant']['output'];
};

export type Holder = HolderAlpha | HolderBeta;

export type HolderAlpha = IHolder & INode & {
  __typename: 'HolderAlpha';
  alphaField: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  payload?: Maybe<Payload>;
};

export type HolderBeta = IHolder & INode & {
  __typename: 'HolderBeta';
  betaField: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  payload?: Maybe<Payload>;
};

export type IContainer = {
  detail?: Maybe<IDetail>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

/**
 * Covariant Return Types: Interface with field returning interface type, implementations narrow to concrete types.
 * Pattern: IContainer.detail: IDetail -> ContainerX.detail: DetailA
 */
export type IDetail = {
  id: Scalars['UUID']['output'];
  value: Scalars['String']['output'];
};

export type IHolder = {
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  payload?: Maybe<Payload>;
};

/**
 * Nested Polymorphism: Polymorphic types containing polymorphic fields with covariant returns at both levels.
 * Pattern: IOuter.inner: IInner -> OuterAlpha.inner: InnerOne (nested covariance)
 */
export type IInner = {
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
};

export type IMutationProblem = {
  message: Scalars['String']['output'];
};

export type IMutationProblemDetails = {
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type INode = {
  id: Scalars['UUID']['output'];
};

export type IOuter = {
  id: Scalars['UUID']['output'];
  inner?: Maybe<IInner>;
  name: Scalars['String']['output'];
};

/**
 * Uniform Union Returns: Interface with union field, all implementations return the same union type.
 * Pattern: IHolder.payload: Payload -> HolderAlpha.payload: Payload (same union, not narrowed)
 */
export type IPayload = {
  data: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
};

export type Inner = InnerOne | InnerTwo;

export type InnerOne = IInner & INode & {
  __typename: 'InnerOne';
  fieldOne: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
};

export type InnerTwo = IInner & INode & {
  __typename: 'InnerTwo';
  fieldTwo: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
};

export type ListContainersInput = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
};

export type ListOutersInput = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename: 'Mutation';
  entities: EntityMutations;
  events: EventMutations;
};

export type MutationProblem = AuthorizationProblem | GeneralProblem | ValidationProblem;

export type MutationProblemDetails = GeneralProblemDetails | ValidationProblemDetails;

export type Outer = OuterAlpha | OuterBeta;

export type OuterAlpha = INode & IOuter & {
  __typename: 'OuterAlpha';
  alphaSpecific: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  inner?: Maybe<InnerOne>;
  name: Scalars['String']['output'];
};

export type OuterBeta = INode & IOuter & {
  __typename: 'OuterBeta';
  betaSpecific: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  inner?: Maybe<InnerTwo>;
  name: Scalars['String']['output'];
};

/**
 * Cursor-Based Pagination: Relay-style connections with cursor pagination for list queries.
 * Pattern: Connection { nodes: [Node!]!, pageInfo: PageInfo! }
 */
export type OuterConnection = {
  __typename: 'OuterConnection';
  nodes: Array<Outer>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename: 'PageInfo';
  count: Scalars['Int']['output'];
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  total: Scalars['Int']['output'];
};

export type Payload = PayloadTypeA | PayloadTypeB;

export type PayloadTypeA = IPayload & {
  __typename: 'PayloadTypeA';
  data: Scalars['String']['output'];
  extraA: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
};

export type PayloadTypeB = IPayload & {
  __typename: 'PayloadTypeB';
  data: Scalars['String']['output'];
  extraB: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
};

export type Query = {
  __typename: 'Query';
  containers: ContainerQueries;
  entities: EntityQueries;
  events: EventQueries;
  health: HealthStatus;
};

export type ValidationProblem = IMutationProblem & {
  __typename: 'ValidationProblem';
  details: Array<ValidationProblemDetails>;
  message: Scalars['String']['output'];
};

export type ValidationProblemDetails = IMutationProblemDetails & {
  __typename: 'ValidationProblemDetails';
  fieldPath: Scalars['String']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  Container:
    | ( ContainerX & { __typename: 'ContainerX' } )
    | ( ContainerY & { __typename: 'ContainerY' } )
  ;
  CreateContainerPayload:
    | ( Omit<CreateContainerFailure, 'errors'> & { errors: Array<_RefType['MutationProblem']> } & { __typename: 'CreateContainerFailure' } )
    | ( Omit<CreateContainerSuccess, 'container'> & { container: _RefType['Container'] } & { __typename: 'CreateContainerSuccess' } )
  ;
  CreateEntityPayload:
    | ( Omit<CreateEntityFailure, 'errors'> & { errors: Array<_RefType['MutationProblem']> } & { __typename: 'CreateEntityFailure' } )
    | ( Omit<CreateEntitySuccess, 'entity'> & { entity: _RefType['Outer'] } & { __typename: 'CreateEntitySuccess' } )
  ;
  Detail:
    | ( DetailA & { __typename: 'DetailA' } )
    | ( DetailB & { __typename: 'DetailB' } )
  ;
  Holder:
    | ( Omit<HolderAlpha, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderAlpha' } )
    | ( Omit<HolderBeta, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderBeta' } )
  ;
  Inner:
    | ( InnerOne & { __typename: 'InnerOne' } )
    | ( InnerTwo & { __typename: 'InnerTwo' } )
  ;
  MutationProblem:
    | ( AuthorizationProblem & { __typename: 'AuthorizationProblem' } )
    | ( GeneralProblem & { __typename: 'GeneralProblem' } )
    | ( ValidationProblem & { __typename: 'ValidationProblem' } )
  ;
  MutationProblemDetails:
    | ( GeneralProblemDetails & { __typename: 'GeneralProblemDetails' } )
    | ( ValidationProblemDetails & { __typename: 'ValidationProblemDetails' } )
  ;
  Outer:
    | ( OuterAlpha & { __typename: 'OuterAlpha' } )
    | ( OuterBeta & { __typename: 'OuterBeta' } )
  ;
  Payload:
    | ( PayloadTypeA & { __typename: 'PayloadTypeA' } )
    | ( PayloadTypeB & { __typename: 'PayloadTypeB' } )
  ;
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  IContainer:
    | ( ContainerX & { __typename: 'ContainerX' } )
    | ( ContainerY & { __typename: 'ContainerY' } )
  ;
  IDetail:
    | ( DetailA & { __typename: 'DetailA' } )
    | ( DetailB & { __typename: 'DetailB' } )
  ;
  IHolder:
    | ( Omit<HolderAlpha, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderAlpha' } )
    | ( Omit<HolderBeta, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderBeta' } )
  ;
  IInner:
    | ( InnerOne & { __typename: 'InnerOne' } )
    | ( InnerTwo & { __typename: 'InnerTwo' } )
  ;
  IMutationProblem:
    | ( AuthorizationProblem & { __typename: 'AuthorizationProblem' } )
    | ( GeneralProblem & { __typename: 'GeneralProblem' } )
    | ( ValidationProblem & { __typename: 'ValidationProblem' } )
  ;
  IMutationProblemDetails:
    | ( GeneralProblemDetails & { __typename: 'GeneralProblemDetails' } )
    | ( ValidationProblemDetails & { __typename: 'ValidationProblemDetails' } )
  ;
  INode:
    | ( ContainerX & { __typename: 'ContainerX' } )
    | ( ContainerY & { __typename: 'ContainerY' } )
    | ( DetailA & { __typename: 'DetailA' } )
    | ( DetailB & { __typename: 'DetailB' } )
    | ( Event & { __typename: 'Event' } )
    | ( Omit<HolderAlpha, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderAlpha' } )
    | ( Omit<HolderBeta, 'payload'> & { payload?: Maybe<_RefType['Payload']> } & { __typename: 'HolderBeta' } )
    | ( InnerOne & { __typename: 'InnerOne' } )
    | ( InnerTwo & { __typename: 'InnerTwo' } )
    | ( OuterAlpha & { __typename: 'OuterAlpha' } )
    | ( OuterBeta & { __typename: 'OuterBeta' } )
  ;
  IOuter:
    | ( OuterAlpha & { __typename: 'OuterAlpha' } )
    | ( OuterBeta & { __typename: 'OuterBeta' } )
  ;
  IPayload:
    | ( PayloadTypeA & { __typename: 'PayloadTypeA' } )
    | ( PayloadTypeB & { __typename: 'PayloadTypeB' } )
  ;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthorizationProblem: ResolverTypeWrapper<AuthorizationProblem>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Container: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Container']>;
  ContainerConnection: ResolverTypeWrapper<Omit<ContainerConnection, 'nodes'> & { nodes: Array<ResolversTypes['Container']> }>;
  ContainerQueries: ResolverTypeWrapper<Omit<ContainerQueries, 'get' | 'list'> & { get?: Maybe<ResolversTypes['Container']>, list: ResolversTypes['ContainerConnection'] }>;
  ContainerX: ResolverTypeWrapper<ContainerX>;
  ContainerY: ResolverTypeWrapper<ContainerY>;
  CreateContainerFailure: ResolverTypeWrapper<Omit<CreateContainerFailure, 'errors'> & { errors: Array<ResolversTypes['MutationProblem']> }>;
  CreateContainerPayload: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateContainerPayload']>;
  CreateContainerSuccess: ResolverTypeWrapper<Omit<CreateContainerSuccess, 'container'> & { container: ResolversTypes['Container'] }>;
  CreateEntityFailure: ResolverTypeWrapper<Omit<CreateEntityFailure, 'errors'> & { errors: Array<ResolversTypes['MutationProblem']> }>;
  CreateEntityInput: CreateEntityInput;
  CreateEntityPayload: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateEntityPayload']>;
  CreateEntitySuccess: ResolverTypeWrapper<Omit<CreateEntitySuccess, 'entity'> & { entity: ResolversTypes['Outer'] }>;
  CreateEventInput: CreateEventInput;
  CreateOptionAData: CreateOptionAData;
  CreateOptionBData: CreateOptionBData;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']['output']>;
  Detail: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Detail']>;
  DetailA: ResolverTypeWrapper<DetailA>;
  DetailB: ResolverTypeWrapper<DetailB>;
  EntityMutations: ResolverTypeWrapper<Omit<EntityMutations, 'create'> & { create: ResolversTypes['CreateEntityPayload'] }>;
  EntityQueries: ResolverTypeWrapper<Omit<EntityQueries, 'get' | 'list'> & { get?: Maybe<ResolversTypes['Outer']>, list: ResolversTypes['OuterConnection'] }>;
  Event: ResolverTypeWrapper<Event>;
  EventMutations: ResolverTypeWrapper<EventMutations>;
  EventQueries: ResolverTypeWrapper<EventQueries>;
  FailureReason: FailureReason;
  GeneralProblem: ResolverTypeWrapper<GeneralProblem>;
  GeneralProblemDetails: ResolverTypeWrapper<GeneralProblemDetails>;
  GetEntityInput: GetEntityInput;
  HealthStatus: ResolverTypeWrapper<HealthStatus>;
  Holder: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Holder']>;
  HolderAlpha: ResolverTypeWrapper<Omit<HolderAlpha, 'payload'> & { payload?: Maybe<ResolversTypes['Payload']> }>;
  HolderBeta: ResolverTypeWrapper<Omit<HolderBeta, 'payload'> & { payload?: Maybe<ResolversTypes['Payload']> }>;
  IContainer: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IContainer']>;
  IDetail: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IDetail']>;
  IHolder: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IHolder']>;
  IInner: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IInner']>;
  IMutationProblem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IMutationProblem']>;
  IMutationProblemDetails: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IMutationProblemDetails']>;
  INode: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['INode']>;
  IOuter: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IOuter']>;
  IPayload: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IPayload']>;
  Inner: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Inner']>;
  InnerOne: ResolverTypeWrapper<InnerOne>;
  InnerTwo: ResolverTypeWrapper<InnerTwo>;
  Instant: ResolverTypeWrapper<Scalars['Instant']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ListContainersInput: ListContainersInput;
  ListOutersInput: ListOutersInput;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  MutationProblem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MutationProblem']>;
  MutationProblemDetails: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MutationProblemDetails']>;
  Outer: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Outer']>;
  OuterAlpha: ResolverTypeWrapper<OuterAlpha>;
  OuterBeta: ResolverTypeWrapper<OuterBeta>;
  OuterConnection: ResolverTypeWrapper<Omit<OuterConnection, 'nodes'> & { nodes: Array<ResolversTypes['Outer']> }>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Payload: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Payload']>;
  PayloadTypeA: ResolverTypeWrapper<PayloadTypeA>;
  PayloadTypeB: ResolverTypeWrapper<PayloadTypeB>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  ValidationProblem: ResolverTypeWrapper<ValidationProblem>;
  ValidationProblemDetails: ResolverTypeWrapper<ValidationProblemDetails>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthorizationProblem: AuthorizationProblem;
  Boolean: Scalars['Boolean']['output'];
  Container: ResolversUnionTypes<ResolversParentTypes>['Container'];
  ContainerConnection: Omit<ContainerConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['Container']> };
  ContainerQueries: Omit<ContainerQueries, 'get' | 'list'> & { get?: Maybe<ResolversParentTypes['Container']>, list: ResolversParentTypes['ContainerConnection'] };
  ContainerX: ContainerX;
  ContainerY: ContainerY;
  CreateContainerFailure: Omit<CreateContainerFailure, 'errors'> & { errors: Array<ResolversParentTypes['MutationProblem']> };
  CreateContainerPayload: ResolversUnionTypes<ResolversParentTypes>['CreateContainerPayload'];
  CreateContainerSuccess: Omit<CreateContainerSuccess, 'container'> & { container: ResolversParentTypes['Container'] };
  CreateEntityFailure: Omit<CreateEntityFailure, 'errors'> & { errors: Array<ResolversParentTypes['MutationProblem']> };
  CreateEntityInput: CreateEntityInput;
  CreateEntityPayload: ResolversUnionTypes<ResolversParentTypes>['CreateEntityPayload'];
  CreateEntitySuccess: Omit<CreateEntitySuccess, 'entity'> & { entity: ResolversParentTypes['Outer'] };
  CreateEventInput: CreateEventInput;
  CreateOptionAData: CreateOptionAData;
  CreateOptionBData: CreateOptionBData;
  Cursor: Scalars['Cursor']['output'];
  Detail: ResolversUnionTypes<ResolversParentTypes>['Detail'];
  DetailA: DetailA;
  DetailB: DetailB;
  EntityMutations: Omit<EntityMutations, 'create'> & { create: ResolversParentTypes['CreateEntityPayload'] };
  EntityQueries: Omit<EntityQueries, 'get' | 'list'> & { get?: Maybe<ResolversParentTypes['Outer']>, list: ResolversParentTypes['OuterConnection'] };
  Event: Event;
  EventMutations: EventMutations;
  EventQueries: EventQueries;
  GeneralProblem: GeneralProblem;
  GeneralProblemDetails: GeneralProblemDetails;
  GetEntityInput: GetEntityInput;
  HealthStatus: HealthStatus;
  Holder: ResolversUnionTypes<ResolversParentTypes>['Holder'];
  HolderAlpha: Omit<HolderAlpha, 'payload'> & { payload?: Maybe<ResolversParentTypes['Payload']> };
  HolderBeta: Omit<HolderBeta, 'payload'> & { payload?: Maybe<ResolversParentTypes['Payload']> };
  IContainer: ResolversInterfaceTypes<ResolversParentTypes>['IContainer'];
  IDetail: ResolversInterfaceTypes<ResolversParentTypes>['IDetail'];
  IHolder: ResolversInterfaceTypes<ResolversParentTypes>['IHolder'];
  IInner: ResolversInterfaceTypes<ResolversParentTypes>['IInner'];
  IMutationProblem: ResolversInterfaceTypes<ResolversParentTypes>['IMutationProblem'];
  IMutationProblemDetails: ResolversInterfaceTypes<ResolversParentTypes>['IMutationProblemDetails'];
  INode: ResolversInterfaceTypes<ResolversParentTypes>['INode'];
  IOuter: ResolversInterfaceTypes<ResolversParentTypes>['IOuter'];
  IPayload: ResolversInterfaceTypes<ResolversParentTypes>['IPayload'];
  Inner: ResolversUnionTypes<ResolversParentTypes>['Inner'];
  InnerOne: InnerOne;
  InnerTwo: InnerTwo;
  Instant: Scalars['Instant']['output'];
  Int: Scalars['Int']['output'];
  ListContainersInput: ListContainersInput;
  ListOutersInput: ListOutersInput;
  LocalDate: Scalars['LocalDate']['output'];
  Mutation: Record<PropertyKey, never>;
  MutationProblem: ResolversUnionTypes<ResolversParentTypes>['MutationProblem'];
  MutationProblemDetails: ResolversUnionTypes<ResolversParentTypes>['MutationProblemDetails'];
  Outer: ResolversUnionTypes<ResolversParentTypes>['Outer'];
  OuterAlpha: OuterAlpha;
  OuterBeta: OuterBeta;
  OuterConnection: Omit<OuterConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['Outer']> };
  PageInfo: PageInfo;
  Payload: ResolversUnionTypes<ResolversParentTypes>['Payload'];
  PayloadTypeA: PayloadTypeA;
  PayloadTypeB: PayloadTypeB;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  UUID: Scalars['UUID']['output'];
  ValidationProblem: ValidationProblem;
  ValidationProblemDetails: ValidationProblemDetails;
  Void: Scalars['Void']['output'];
}>;

export type AuthorizationProblemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AuthorizationProblem'] = ResolversParentTypes['AuthorizationProblem']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredPermission?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ContainerX' | 'ContainerY', ParentType, ContextType>;
}>;

export type ContainerConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ContainerConnection'] = ResolversParentTypes['ContainerConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Container']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
}>;

export type ContainerQueriesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ContainerQueries'] = ResolversParentTypes['ContainerQueries']> = ResolversObject<{
  get?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType, RequireFields<ContainerQueriesGetArgs, 'input'>>;
  list?: Resolver<ResolversTypes['ContainerConnection'], ParentType, ContextType, RequireFields<ContainerQueriesListArgs, 'input'>>;
}>;

export type ContainerXResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ContainerX'] = ResolversParentTypes['ContainerX']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['DetailA']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainerYResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ContainerY'] = ResolversParentTypes['ContainerY']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['DetailB']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateContainerFailureResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateContainerFailure'] = ResolversParentTypes['CreateContainerFailure']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['MutationProblem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FailureReason'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateContainerPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateContainerPayload'] = ResolversParentTypes['CreateContainerPayload']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateContainerFailure' | 'CreateContainerSuccess', ParentType, ContextType>;
}>;

export type CreateContainerSuccessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateContainerSuccess'] = ResolversParentTypes['CreateContainerSuccess']> = ResolversObject<{
  container?: Resolver<ResolversTypes['Container'], ParentType, ContextType>;
  recordId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEntityFailureResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateEntityFailure'] = ResolversParentTypes['CreateEntityFailure']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['MutationProblem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FailureReason'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEntityPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateEntityPayload'] = ResolversParentTypes['CreateEntityPayload']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateEntityFailure' | 'CreateEntitySuccess', ParentType, ContextType>;
}>;

export type CreateEntitySuccessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateEntitySuccess'] = ResolversParentTypes['CreateEntitySuccess']> = ResolversObject<{
  entity?: Resolver<ResolversTypes['Outer'], ParentType, ContextType>;
  recordId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type DetailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Detail'] = ResolversParentTypes['Detail']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DetailA' | 'DetailB', ParentType, ContextType>;
}>;

export type DetailAResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DetailA'] = ResolversParentTypes['DetailA']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  specificA?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DetailBResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DetailB'] = ResolversParentTypes['DetailB']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  specificB?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityMutationsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EntityMutations'] = ResolversParentTypes['EntityMutations']> = ResolversObject<{
  create?: Resolver<ResolversTypes['CreateEntityPayload'], ParentType, ContextType, RequireFields<EntityMutationsCreateArgs, 'input'>>;
}>;

export type EntityQueriesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EntityQueries'] = ResolversParentTypes['EntityQueries']> = ResolversObject<{
  get?: Resolver<Maybe<ResolversTypes['Outer']>, ParentType, ContextType, RequireFields<EntityQueriesGetArgs, 'input'>>;
  list?: Resolver<ResolversTypes['OuterConnection'], ParentType, ContextType, RequireFields<EntityQueriesListArgs, 'input'>>;
}>;

export type EventResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Instant'], ParentType, ContextType>;
  eventDate?: Resolver<ResolversTypes['LocalDate'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventMutationsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EventMutations'] = ResolversParentTypes['EventMutations']> = ResolversObject<{
  create?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<EventMutationsCreateArgs, 'input'>>;
}>;

export type EventQueriesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EventQueries'] = ResolversParentTypes['EventQueries']> = ResolversObject<{
  get?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventQueriesGetArgs, 'id'>>;
}>;

export type GeneralProblemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GeneralProblem'] = ResolversParentTypes['GeneralProblem']> = ResolversObject<{
  details?: Resolver<Array<ResolversTypes['GeneralProblemDetails']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeneralProblemDetailsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GeneralProblemDetails'] = ResolversParentTypes['GeneralProblemDetails']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HealthStatusResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HealthStatus'] = ResolversParentTypes['HealthStatus']> = ResolversObject<{
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Instant'], ParentType, ContextType>;
}>;

export type HolderResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Holder'] = ResolversParentTypes['Holder']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HolderAlpha' | 'HolderBeta', ParentType, ContextType>;
}>;

export type HolderAlphaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HolderAlpha'] = ResolversParentTypes['HolderAlpha']> = ResolversObject<{
  alphaField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HolderBetaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HolderBeta'] = ResolversParentTypes['HolderBeta']> = ResolversObject<{
  betaField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IContainerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IContainer'] = ResolversParentTypes['IContainer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ContainerX' | 'ContainerY', ParentType, ContextType>;
}>;

export type IDetailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IDetail'] = ResolversParentTypes['IDetail']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DetailA' | 'DetailB', ParentType, ContextType>;
}>;

export type IHolderResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IHolder'] = ResolversParentTypes['IHolder']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HolderAlpha' | 'HolderBeta', ParentType, ContextType>;
}>;

export type IInnerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IInner'] = ResolversParentTypes['IInner']> = ResolversObject<{
  __resolveType: TypeResolveFn<'InnerOne' | 'InnerTwo', ParentType, ContextType>;
}>;

export type IMutationProblemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IMutationProblem'] = ResolversParentTypes['IMutationProblem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AuthorizationProblem' | 'GeneralProblem' | 'ValidationProblem', ParentType, ContextType>;
}>;

export type IMutationProblemDetailsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IMutationProblemDetails'] = ResolversParentTypes['IMutationProblemDetails']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GeneralProblemDetails' | 'ValidationProblemDetails', ParentType, ContextType>;
}>;

export type INodeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['INode'] = ResolversParentTypes['INode']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ContainerX' | 'ContainerY' | 'DetailA' | 'DetailB' | 'Event' | 'HolderAlpha' | 'HolderBeta' | 'InnerOne' | 'InnerTwo' | 'OuterAlpha' | 'OuterBeta', ParentType, ContextType>;
}>;

export type IOuterResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IOuter'] = ResolversParentTypes['IOuter']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OuterAlpha' | 'OuterBeta', ParentType, ContextType>;
}>;

export type IPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IPayload'] = ResolversParentTypes['IPayload']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PayloadTypeA' | 'PayloadTypeB', ParentType, ContextType>;
}>;

export type InnerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Inner'] = ResolversParentTypes['Inner']> = ResolversObject<{
  __resolveType: TypeResolveFn<'InnerOne' | 'InnerTwo', ParentType, ContextType>;
}>;

export type InnerOneResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InnerOne'] = ResolversParentTypes['InnerOne']> = ResolversObject<{
  fieldOne?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InnerTwoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InnerTwo'] = ResolversParentTypes['InnerTwo']> = ResolversObject<{
  fieldTwo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface InstantScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Instant'], any> {
  name: 'Instant';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  entities?: Resolver<ResolversTypes['EntityMutations'], ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventMutations'], ParentType, ContextType>;
}>;

export type MutationProblemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MutationProblem'] = ResolversParentTypes['MutationProblem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AuthorizationProblem' | 'GeneralProblem' | 'ValidationProblem', ParentType, ContextType>;
}>;

export type MutationProblemDetailsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MutationProblemDetails'] = ResolversParentTypes['MutationProblemDetails']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GeneralProblemDetails' | 'ValidationProblemDetails', ParentType, ContextType>;
}>;

export type OuterResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Outer'] = ResolversParentTypes['Outer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OuterAlpha' | 'OuterBeta', ParentType, ContextType>;
}>;

export type OuterAlphaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OuterAlpha'] = ResolversParentTypes['OuterAlpha']> = ResolversObject<{
  alphaSpecific?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  inner?: Resolver<Maybe<ResolversTypes['InnerOne']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OuterBetaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OuterBeta'] = ResolversParentTypes['OuterBeta']> = ResolversObject<{
  betaSpecific?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  inner?: Resolver<Maybe<ResolversTypes['InnerTwo']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OuterConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OuterConnection'] = ResolversParentTypes['OuterConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Outer']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type PayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PayloadTypeA' | 'PayloadTypeB', ParentType, ContextType>;
}>;

export type PayloadTypeAResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PayloadTypeA'] = ResolversParentTypes['PayloadTypeA']> = ResolversObject<{
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extraA?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayloadTypeBResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PayloadTypeB'] = ResolversParentTypes['PayloadTypeB']> = ResolversObject<{
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extraB?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  containers?: Resolver<ResolversTypes['ContainerQueries'], ParentType, ContextType>;
  entities?: Resolver<ResolversTypes['EntityQueries'], ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventQueries'], ParentType, ContextType>;
  health?: Resolver<ResolversTypes['HealthStatus'], ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type ValidationProblemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ValidationProblem'] = ResolversParentTypes['ValidationProblem']> = ResolversObject<{
  details?: Resolver<Array<ResolversTypes['ValidationProblemDetails']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidationProblemDetailsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ValidationProblemDetails'] = ResolversParentTypes['ValidationProblemDetails']> = ResolversObject<{
  fieldPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  AuthorizationProblem?: AuthorizationProblemResolvers<ContextType>;
  Container?: ContainerResolvers<ContextType>;
  ContainerConnection?: ContainerConnectionResolvers<ContextType>;
  ContainerQueries?: ContainerQueriesResolvers<ContextType>;
  ContainerX?: ContainerXResolvers<ContextType>;
  ContainerY?: ContainerYResolvers<ContextType>;
  CreateContainerFailure?: CreateContainerFailureResolvers<ContextType>;
  CreateContainerPayload?: CreateContainerPayloadResolvers<ContextType>;
  CreateContainerSuccess?: CreateContainerSuccessResolvers<ContextType>;
  CreateEntityFailure?: CreateEntityFailureResolvers<ContextType>;
  CreateEntityPayload?: CreateEntityPayloadResolvers<ContextType>;
  CreateEntitySuccess?: CreateEntitySuccessResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Detail?: DetailResolvers<ContextType>;
  DetailA?: DetailAResolvers<ContextType>;
  DetailB?: DetailBResolvers<ContextType>;
  EntityMutations?: EntityMutationsResolvers<ContextType>;
  EntityQueries?: EntityQueriesResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventMutations?: EventMutationsResolvers<ContextType>;
  EventQueries?: EventQueriesResolvers<ContextType>;
  GeneralProblem?: GeneralProblemResolvers<ContextType>;
  GeneralProblemDetails?: GeneralProblemDetailsResolvers<ContextType>;
  HealthStatus?: HealthStatusResolvers<ContextType>;
  Holder?: HolderResolvers<ContextType>;
  HolderAlpha?: HolderAlphaResolvers<ContextType>;
  HolderBeta?: HolderBetaResolvers<ContextType>;
  IContainer?: IContainerResolvers<ContextType>;
  IDetail?: IDetailResolvers<ContextType>;
  IHolder?: IHolderResolvers<ContextType>;
  IInner?: IInnerResolvers<ContextType>;
  IMutationProblem?: IMutationProblemResolvers<ContextType>;
  IMutationProblemDetails?: IMutationProblemDetailsResolvers<ContextType>;
  INode?: INodeResolvers<ContextType>;
  IOuter?: IOuterResolvers<ContextType>;
  IPayload?: IPayloadResolvers<ContextType>;
  Inner?: InnerResolvers<ContextType>;
  InnerOne?: InnerOneResolvers<ContextType>;
  InnerTwo?: InnerTwoResolvers<ContextType>;
  Instant?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  MutationProblem?: MutationProblemResolvers<ContextType>;
  MutationProblemDetails?: MutationProblemDetailsResolvers<ContextType>;
  Outer?: OuterResolvers<ContextType>;
  OuterAlpha?: OuterAlphaResolvers<ContextType>;
  OuterBeta?: OuterBetaResolvers<ContextType>;
  OuterConnection?: OuterConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Payload?: PayloadResolvers<ContextType>;
  PayloadTypeA?: PayloadTypeAResolvers<ContextType>;
  PayloadTypeB?: PayloadTypeBResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  ValidationProblem?: ValidationProblemResolvers<ContextType>;
  ValidationProblemDetails?: ValidationProblemDetailsResolvers<ContextType>;
  Void?: GraphQLScalarType;
}>;

