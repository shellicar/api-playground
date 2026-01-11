import { z } from 'zod';
import { iNodeSchema, instantSchema, localDateSchema, uuidSchema } from './base';

// Event type
export const eventSchema = iNodeSchema.extend({
  __typename: z.literal('Event'),
  name: z.string(),
  createdAt: instantSchema,
  eventDate: localDateSchema,
});

export type Event = z.infer<typeof eventSchema>;

// Event inputs
export const getEventInputSchema = z.object({
  id: uuidSchema,
});

export type GetEventInput = z.infer<typeof getEventInputSchema>;

export const createEventInputSchema = z.object({
  name: z.string(),
  createdAt: instantSchema,
  eventDate: localDateSchema,
});

export type CreateEventInput = z.infer<typeof createEventInputSchema>;
