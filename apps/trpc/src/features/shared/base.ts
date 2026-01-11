import { Instant, LocalDate } from '@js-joda/core';
import { z } from 'zod';

// Scalars
export const uuidSchema = z.uuid();
export const cursorSchema = z.string();
export const instantSchema = z.custom<Instant>((val) => val instanceof Instant, { message: 'Must be an Instant' });
export const localDateSchema = z.custom<LocalDate>((val) => val instanceof LocalDate, { message: 'Must be a LocalDate' });

// Base interface
export const iNodeSchema = z.object({
  id: uuidSchema,
});

export type INode = z.infer<typeof iNodeSchema>;

// Error handling types
export enum FailureReason {
  InvalidInput = 'INVALID_INPUT',
  Unauthorised = 'UNAUTHORISED',
  NotFound = 'NOT_FOUND',
}

export const failureReasonSchema = z.enum(FailureReason);

export const iMutationProblemDetailsSchema = z.object({
  key: z.string(),
  value: z.string(),
});

export type IMutationProblemDetails = z.infer<typeof iMutationProblemDetailsSchema>;

export const validationProblemDetailsSchema = iMutationProblemDetailsSchema.extend({
  __typename: z.literal('ValidationProblemDetails'),
  fieldPath: z.string(),
});

export type ValidationProblemDetails = z.infer<typeof validationProblemDetailsSchema>;

export const generalProblemDetailsSchema = iMutationProblemDetailsSchema.extend({
  __typename: z.literal('GeneralProblemDetails'),
});

export type GeneralProblemDetails = z.infer<typeof generalProblemDetailsSchema>;

export const mutationProblemDetailsSchema = z.discriminatedUnion('__typename', [validationProblemDetailsSchema, generalProblemDetailsSchema]);

export type MutationProblemDetails = z.infer<typeof mutationProblemDetailsSchema>;

export const iMutationProblemSchema = z.object({
  message: z.string(),
});

export type IMutationProblem = z.infer<typeof iMutationProblemSchema>;

export const validationProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('ValidationProblem'),
  details: z.array(validationProblemDetailsSchema),
});

export type ValidationProblem = z.infer<typeof validationProblemSchema>;

export const authorizationProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('AuthorizationProblem'),
  requiredPermission: z.string(),
});

export type AuthorizationProblem = z.infer<typeof authorizationProblemSchema>;

export const generalProblemSchema = iMutationProblemSchema.extend({
  __typename: z.literal('GeneralProblem'),
  details: z.array(generalProblemDetailsSchema),
});

export type GeneralProblem = z.infer<typeof generalProblemSchema>;

export const mutationProblemSchema = z.discriminatedUnion('__typename', [validationProblemSchema, authorizationProblemSchema, generalProblemSchema]);

export type MutationProblem = z.infer<typeof mutationProblemSchema>;
