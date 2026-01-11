import { z } from 'zod';
import { iNodeSchema, uuidSchema } from './base';

// IPayload interface
export const iPayloadSchema = iNodeSchema.extend({
  data: z.string(),
});

export type IPayload = z.infer<typeof iPayloadSchema>;

// Concrete Payload types
export const payloadASchema = iPayloadSchema.extend({
  __typename: z.literal('PayloadA'),
  fieldA: z.string(),
});

export type PayloadA = z.infer<typeof payloadASchema>;

export const payloadBSchema = iPayloadSchema.extend({
  __typename: z.literal('PayloadB'),
  fieldB: z.number(),
});

export type PayloadB = z.infer<typeof payloadBSchema>;

export const payloadSchema = z.discriminatedUnion('__typename', [payloadASchema, payloadBSchema]);

export type Payload = z.infer<typeof payloadSchema>;

// IHolder interface (returns union, not narrowed)
export const iHolderSchema = iNodeSchema.extend({
  name: z.string(),
  payload: payloadSchema.nullable(),
});

export type IHolder = z.infer<typeof iHolderSchema>;

// Concrete Holder types (uniform union returns: both return same union)
export const holderAlphaSchema = z.object({
  __typename: z.literal('HolderAlpha'),
  id: uuidSchema,
  name: z.string(),
  payload: payloadSchema.nullable(),
  alphaField: z.string(),
});

export type HolderAlpha = z.infer<typeof holderAlphaSchema>;

export const holderBetaSchema = z.object({
  __typename: z.literal('HolderBeta'),
  id: uuidSchema,
  name: z.string(),
  payload: payloadSchema.nullable(),
  betaField: z.boolean(),
});

export type HolderBeta = z.infer<typeof holderBetaSchema>;

export const holderSchema = z.discriminatedUnion('__typename', [holderAlphaSchema, holderBetaSchema]);

export type Holder = z.infer<typeof holderSchema>;
