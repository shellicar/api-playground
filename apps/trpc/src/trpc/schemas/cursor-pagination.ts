import { z } from 'zod';
import { containerSchema } from './covariant-returns';
import { outerSchema } from './nested-polymorphism';

export const pageInfoSchema = z.object({
  __typename: z.literal('PageInfo'),
  total: z.number(),
  count: z.number(),
  hasNextPage: z.boolean(),
  endCursor: z.string().nullable(),
});

export type PageInfo = z.infer<typeof pageInfoSchema>;

export const outerConnectionSchema = z.object({
  __typename: z.literal('OuterConnection'),
  nodes: z.array(outerSchema),
  pageInfo: pageInfoSchema,
});

export type OuterConnection = z.infer<typeof outerConnectionSchema>;

export const containerConnectionSchema = z.object({
  __typename: z.literal('ContainerConnection'),
  nodes: z.array(containerSchema),
  pageInfo: pageInfoSchema,
});

export type ContainerConnection = z.infer<typeof containerConnectionSchema>;

export const listOutersInputSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type ListOutersInput = z.infer<typeof listOutersInputSchema>;

export const listContainersInputSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type ListContainersInput = z.infer<typeof listContainersInputSchema>;
