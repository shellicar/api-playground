import { z } from 'zod';
import { iNodeSchema, uuidSchema } from '../shared/base';

// IPayload interface
const iPayloadSchema = iNodeSchema.extend({
  data: z.string(),
});

// Concrete Payload types
const payloadASchema = iPayloadSchema.extend({
  __typename: z.literal('PayloadA'),
  fieldA: z.string(),
});

const payloadBSchema = iPayloadSchema.extend({
  __typename: z.literal('PayloadB'),
  fieldB: z.number(),
});

const payloadSchema = z.discriminatedUnion('__typename', [payloadASchema, payloadBSchema]);

// IHolder interface (returns union, not narrowed)
const iHolderSchema = iNodeSchema.extend({
  name: z.string(),
  payload: payloadSchema.nullable(),
});

// export type IHolder = z.infer<typeof iHolderSchema>;

// Concrete Holder types (uniform union returns: both return same union)
const holderAlphaSchema = iHolderSchema.extend({
  __typename: z.literal('HolderAlpha'),
  payload: payloadSchema.nullable(),
  alphaField: z.string(),
});

// export type HolderAlpha = z.infer<typeof holderAlphaSchema>;

const holderBetaSchema = iHolderSchema.extend({
  __typename: z.literal('HolderBeta'),
  payload: payloadSchema.nullable(),
  betaField: z.boolean(),
});

// export type HolderBeta = z.infer<typeof holderBetaSchema>;

export const holderSchema = z.discriminatedUnion('__typename', [holderAlphaSchema, holderBetaSchema]);

export type Holder = z.infer<typeof holderSchema>;

// Input schemas
export const queryHoldersGetInputSchema = z.object({
  id: uuidSchema,
});

export type QueryHoldersGetInput = z.infer<typeof queryHoldersGetInputSchema>;

export const queryHoldersListInputSchema = z.object({
  first: z.number().default(10),
});

export type QueryHoldersListInput = z.infer<typeof queryHoldersListInputSchema>;
