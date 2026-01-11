import { z } from 'zod';
import { instantSchema } from './base';

export const healthStatusSchema = z.object({
  status: z.string(),
  timestamp: instantSchema,
});

export type HealthStatus = z.infer<typeof healthStatusSchema>;
