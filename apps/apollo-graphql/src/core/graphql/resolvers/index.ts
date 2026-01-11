import { Instant, LocalDate } from '@js-joda/core';
import { GraphQLScalarType, Kind } from 'graphql';
import type { ContainerQueries, EntityMutations, EntityQueries, EventMutations, EventQueries, Resolvers } from '../../../generated/graphql';
import { IQueryHealthResolver } from '../../../services/resolvers/interfaces';
import { covariantReturnsResolvers } from './covariant-returns';
import { customScalarsResolvers } from './custom-scalars';
import { nestedPolymorphismResolvers } from './nested-polymorphism';

const InstantScalar = new GraphQLScalarType<Instant, string>({
  name: 'Instant',
  description: 'ISO 8601 instant',
  serialize: (value: unknown) => {
    if (value instanceof Instant) {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    throw new Error(`Cannot serialize Instant: ${value}`);
  },
  parseValue: (value: unknown) => {
    if (typeof value === 'string') {
      return Instant.parse(value);
    }
    throw new Error(`Cannot parse Instant from: ${value}`);
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      return Instant.parse(ast.value);
    }
    throw new Error(`Cannot parse Instant literal from: ${ast.kind}`);
  },
});

const LocalDateScalar = new GraphQLScalarType<LocalDate, string>({
  name: 'LocalDate',
  description: 'ISO 8601 local date',
  serialize: (value: unknown) => {
    if (value instanceof LocalDate) {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    throw new Error(`Cannot serialize LocalDate: ${value}`);
  },
  parseValue: (value: unknown) => {
    if (typeof value === 'string') {
      return LocalDate.parse(value);
    }
    throw new Error(`Cannot parse LocalDate from: ${value}`);
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      return LocalDate.parse(ast.value);
    }
    throw new Error(`Cannot parse LocalDate literal from: ${ast.kind}`);
  },
});

export const resolvers = {
  Query: {
    health: (_parent, _args, { container }) => {
      return container.resolve(IQueryHealthResolver).query();
    },
    entities: () => ({}) as EntityQueries,
    containers: () => ({}) as ContainerQueries,
    events: () => ({}) as EventQueries,
  },
  Mutation: {
    entities: () => ({}) as EntityMutations,
    events: () => ({}) as EventMutations,
  },
  Instant: InstantScalar,
  LocalDate: LocalDateScalar,
  ...nestedPolymorphismResolvers,
  ...covariantReturnsResolvers,
  ...customScalarsResolvers,
} satisfies Resolvers;
