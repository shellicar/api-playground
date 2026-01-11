import { z } from 'zod';
import { uuidSchema } from '../shared/base';

// Discriminated input types (mimics GraphQL @oneOf directive)
export const createOptionADataSchema = z.object({
  name: z.string(),
  valueA: z.string(),
});

export type CreateOptionAData = z.infer<typeof createOptionADataSchema>;

export const createOptionBDataSchema = z.object({
  name: z.string(),
  valueB: z.number(),
});

export type CreateOptionBData = z.infer<typeof createOptionBDataSchema>;

// Discriminated union input - exactly one option must be provided
export const mutationEntitiesCreateInputSchema = z.union([z.object({ optionA: createOptionADataSchema, optionB: z.undefined() }), z.object({ optionA: z.undefined(), optionB: createOptionBDataSchema })]);

export type MutationEntitiesCreateInput = z.infer<typeof mutationEntitiesCreateInputSchema>;

export const queryEntitiesGetInputSchema = z.object({
  id: uuidSchema,
});

export type QueryEntitiesGetInput = z.infer<typeof queryEntitiesGetInputSchema>;
