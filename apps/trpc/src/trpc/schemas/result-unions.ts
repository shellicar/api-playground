import { z } from 'zod';
import { failureReasonSchema, mutationProblemSchema } from './base';
import { outerSchema } from './nested-polymorphism';

// Success/Failure pattern
export const iSuccessSchema = z.object({
  recordId: z.string(),
});

export type ISuccess = z.infer<typeof iSuccessSchema>;

export const iFailureSchema = z.object({
  status: failureReasonSchema,
  errors: z.array(mutationProblemSchema),
});

export type IFailure = z.infer<typeof iFailureSchema>;

export const createEntitySuccessSchema = iSuccessSchema.extend({
  __typename: z.literal('CreateEntitySuccess'),
  entity: outerSchema,
});

export type CreateEntitySuccess = z.infer<typeof createEntitySuccessSchema>;

export const createEntityFailureSchema = iFailureSchema.extend({
  __typename: z.literal('CreateEntityFailure'),
});

export type CreateEntityFailure = z.infer<typeof createEntityFailureSchema>;

export const createEntityPayloadSchema = z.discriminatedUnion('__typename', [
  createEntitySuccessSchema,
  createEntityFailureSchema,
]);

export type CreateEntityPayload = z.infer<typeof createEntityPayloadSchema>;
