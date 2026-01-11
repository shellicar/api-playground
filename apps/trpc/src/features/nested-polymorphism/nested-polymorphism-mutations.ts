import { z } from 'zod';
import { iFailureSchema, iSuccessSchema } from '../shared/result-unions';
import { outerSchema } from './nested-polymorphism';

export const createEntitySuccessSchema = iSuccessSchema.extend({
  __typename: z.literal('CreateEntitySuccess'),
  entity: outerSchema,
});

export type CreateEntitySuccess = z.infer<typeof createEntitySuccessSchema>;

export const createEntityFailureSchema = iFailureSchema.extend({
  __typename: z.literal('CreateEntityFailure'),
});

export type CreateEntityFailure = z.infer<typeof createEntityFailureSchema>;

export const createEntityPayloadSchema = z.discriminatedUnion('__typename', [createEntitySuccessSchema, createEntityFailureSchema]);

export type CreateEntityPayload = z.infer<typeof createEntityPayloadSchema>;
