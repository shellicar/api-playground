import { Instant, LocalDate } from '@js-joda/core';
import { z } from 'zod';

// Scalars
export const uuidSchema = z.uuid();
export const instantSchema = z.custom<Instant>((val) => val instanceof Instant, { message: 'Must be an Instant' });
export const localDateSchema = z.custom<LocalDate>((val) => val instanceof LocalDate, { message: 'Must be a LocalDate' });

// Base interface
export const iNodeSchema = z.object({
  id: uuidSchema,
});

// Error handling types
export enum FailureReason {
  InvalidInput = 'INVALID_INPUT',
  Unauthorised = 'UNAUTHORISED',
  NotFound = 'NOT_FOUND',
}

export const failureReasonSchema = z.enum(FailureReason);

const iMutationProblemDetailsSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const validationProblemDetailsSchema = iMutationProblemDetailsSchema.extend({
  __typename: z.literal('ValidationProblemDetails'),
  fieldPath: z.string(),
});

const generalProblemDetailsSchema = iMutationProblemDetailsSchema.extend({
  __typename: z.literal('GeneralProblemDetails'),
});

// const mutationProblemDetailsSchema = z.discriminatedUnion('__typename', [validationProblemDetailsSchema, generalProblemDetailsSchema]);

const iMutationProblemSchema = z.object({
  message: z.string(),
});

const validationProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('ValidationProblem'),
  details: z.array(validationProblemDetailsSchema),
});

const authorizationProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('AuthorizationProblem'),
  requiredPermission: z.string(),
});

const generalProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('GeneralProblem'),
  details: z.array(generalProblemDetailsSchema),
});

export const mutationProblemSchema = z.discriminatedUnion('__typename', [validationProblemSchema, authorizationProblemSchema, generalProblemSchema]);
