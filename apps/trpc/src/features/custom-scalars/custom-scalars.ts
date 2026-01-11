import { z } from 'zod';
import { iNodeSchema, instantSchema, localDateSchema, uuidSchema } from '../shared/base';

// Event type
export const eventSchema = iNodeSchema.extend({
  __typename: z.literal('Event'),
  name: z.string(),
  createdAt: instantSchema,
  eventDate: localDateSchema,
});

export type Event = z.infer<typeof eventSchema>;

// Event inputs
export const queryEventsGetInputSchema = z.object({
  id: uuidSchema,
});

export type QueryEventsGetInput = z.infer<typeof queryEventsGetInputSchema>;

export const mutationEventsCreateInputSchema = z.object({
  name: z.string(),
  createdAt: instantSchema,
  eventDate: localDateSchema,
});

export type MutationEventsCreateInput = z.infer<typeof mutationEventsCreateInputSchema>;
