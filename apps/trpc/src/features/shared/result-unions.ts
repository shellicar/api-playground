import { z } from 'zod';
import { failureReasonSchema, mutationProblemSchema } from './base';

// Success/Failure pattern
export const iSuccessSchema = z.object({
  recordId: z.string(),
});

export type ISuccess = z.infer<typeof iSuccessSchema>;

export const iFailureSchema = z.object({
  status: failureReasonSchema,
  errors: z.array(mutationProblemSchema),
});

export type IFailure = z.infer<typeof iFailureSchema>;
