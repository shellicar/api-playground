import { z } from 'zod';

export const pageInfoSchema = z.object({
  __typename: z.literal('PageInfo'),
  total: z.number(),
  count: z.number(),
  hasNextPage: z.boolean(),
  endCursor: z.string().nullable(),
});

export type PageInfo = z.infer<typeof pageInfoSchema>;
