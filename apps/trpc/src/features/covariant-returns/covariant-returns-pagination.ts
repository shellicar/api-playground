import { z } from 'zod';
import { pageInfoSchema } from '../shared/cursor-pagination';
import { containerSchema } from './covariant-returns';

export const containerConnectionSchema = z.object({
  __typename: z.literal('ContainerConnection'),
  nodes: z.array(containerSchema),
  pageInfo: pageInfoSchema,
});

export type ContainerConnection = z.infer<typeof containerConnectionSchema>;

export const listContainersInputSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type ListContainersInput = z.infer<typeof listContainersInputSchema>;
