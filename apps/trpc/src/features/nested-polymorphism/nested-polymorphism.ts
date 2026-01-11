import { z } from 'zod';
import { iNodeSchema } from '../shared/base';

// IInner interface
const iInnerSchema = iNodeSchema.extend({
  label: z.string(),
});

// Concrete Inner types
const innerOneSchema = iInnerSchema.extend({
  __typename: z.literal('InnerOne'),
  fieldOne: z.string(),
});

const innerTwoSchema = iInnerSchema.extend({
  __typename: z.literal('InnerTwo'),
  fieldTwo: z.number(),
});

// const innerSchema = z.discriminatedUnion('__typename', [innerOneSchema, innerTwoSchema]);

// IOuter interface
const iOuterSchema = iNodeSchema.extend({
  name: z.string(),
  inner: iInnerSchema.nullable(),
});

// export type IOuter = z.infer<typeof iOuterSchema>;

// Concrete Outer types (nested covariant returns)
const outerAlphaSchema = iOuterSchema.extend({
  __typename: z.literal('OuterAlpha'),
  inner: innerOneSchema.nullable(),
  alphaSpecific: z.string(),
});

// export type OuterAlpha = z.infer<typeof outerAlphaSchema>;

const outerBetaSchema = iOuterSchema.extend({
  __typename: z.literal('OuterBeta'),
  inner: innerTwoSchema.nullable(),
  betaSpecific: z.boolean(),
});

// export type OuterBeta = z.infer<typeof outerBetaSchema>;

export const outerSchema = z.discriminatedUnion('__typename', [outerAlphaSchema, outerBetaSchema]);

export type Outer = z.infer<typeof outerSchema>;
