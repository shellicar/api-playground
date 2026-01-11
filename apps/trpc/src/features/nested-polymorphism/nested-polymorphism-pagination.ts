import { z } from 'zod';
import { pageInfoSchema } from '../shared/cursor-pagination';
import { outerSchema } from './nested-polymorphism';

export const outerConnectionSchema = z.object({
  __typename: z.literal('OuterConnection'),
  nodes: z.array(outerSchema),
  pageInfo: pageInfoSchema,
});

export type OuterConnection = z.infer<typeof outerConnectionSchema>;

export const queryEntitiesListInputSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type QueryEntitiesListInput = z.infer<typeof queryEntitiesListInputSchema>;
