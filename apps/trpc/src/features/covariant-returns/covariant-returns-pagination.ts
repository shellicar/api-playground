import { z } from 'zod';
import { uuidSchema } from '../shared/base';
import { pageInfoSchema } from '../shared/cursor-pagination';
import { containerSchema } from './covariant-returns';

export const containerConnectionSchema = z.object({
  __typename: z.literal('ContainerConnection'),
  nodes: z.array(containerSchema),
  pageInfo: pageInfoSchema,
});

export type ContainerConnection = z.infer<typeof containerConnectionSchema>;

export const queryContainersGetInputSchema = z.object({
  id: uuidSchema,
});

export type QueryContainersGetInput = z.infer<typeof queryContainersGetInputSchema>;

export const queryContainersListInputSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type QueryContainersListInput = z.infer<typeof queryContainersListInputSchema>;
