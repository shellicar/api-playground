import { z } from 'zod';
import { iNodeSchema, uuidSchema } from '../shared/base';

// IInner interface
export const iInnerSchema = iNodeSchema.extend({
  label: z.string(),
});

export type IInner = z.infer<typeof iInnerSchema>;

// Concrete Inner types
export const innerOneSchema = iInnerSchema.extend({
  __typename: z.literal('InnerOne'),
  fieldOne: z.string(),
});

export type InnerOne = z.infer<typeof innerOneSchema>;

export const innerTwoSchema = iInnerSchema.extend({
  __typename: z.literal('InnerTwo'),
  fieldTwo: z.number(),
});

export type InnerTwo = z.infer<typeof innerTwoSchema>;

export const innerSchema = z.discriminatedUnion('__typename', [innerOneSchema, innerTwoSchema]);

export type Inner = z.infer<typeof innerSchema>;

// IOuter interface
export const iOuterSchema = iNodeSchema.extend({
  name: z.string(),
  inner: iInnerSchema.nullable(),
});

export type IOuter = z.infer<typeof iOuterSchema>;

// Concrete Outer types (nested covariant returns)
export const outerAlphaSchema = z.object({
  __typename: z.literal('OuterAlpha'),
  id: uuidSchema,
  name: z.string(),
  inner: innerOneSchema.nullable(),
  alphaSpecific: z.string(),
});

export type OuterAlpha = z.infer<typeof outerAlphaSchema>;

export const outerBetaSchema = z.object({
  __typename: z.literal('OuterBeta'),
  id: uuidSchema,
  name: z.string(),
  inner: innerTwoSchema.nullable(),
  betaSpecific: z.boolean(),
});

export type OuterBeta = z.infer<typeof outerBetaSchema>;

export const outerSchema = z.discriminatedUnion('__typename', [outerAlphaSchema, outerBetaSchema]);

export type Outer = z.infer<typeof outerSchema>;
