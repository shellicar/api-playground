import { z } from 'zod';
import { iFailureSchema, iSuccessSchema } from '../shared/result-unions';
import { outerSchema } from './nested-polymorphism';

const createEntitySuccessSchema = iSuccessSchema.extend({
  __typename: z.literal('CreateEntitySuccess'),
  entity: outerSchema,
});

const createEntityFailureSchema = iFailureSchema.extend({
  __typename: z.literal('CreateEntityFailure'),
});

export const createEntityPayloadSchema = z.discriminatedUnion('__typename', [createEntitySuccessSchema, createEntityFailureSchema]);

export type CreateEntityPayload = z.infer<typeof createEntityPayloadSchema>;
