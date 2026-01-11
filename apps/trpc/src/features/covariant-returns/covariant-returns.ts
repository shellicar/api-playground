import { z } from 'zod';
import { iNodeSchema, uuidSchema } from '../shared/base';

// IDetail interface
export const iDetailSchema = iNodeSchema.extend({
  value: z.string(),
});

export type IDetail = z.infer<typeof iDetailSchema>;

// Concrete Detail types
export const detailASchema = iDetailSchema.extend({
  __typename: z.literal('DetailA'),
  specificA: z.number(),
});

export type DetailA = z.infer<typeof detailASchema>;

export const detailBSchema = iDetailSchema.extend({
  __typename: z.literal('DetailB'),
  specificB: z.boolean(),
});

export type DetailB = z.infer<typeof detailBSchema>;

export const detailSchema = z.discriminatedUnion('__typename', [detailASchema, detailBSchema]);

export type Detail = z.infer<typeof detailSchema>;

// IContainer interface
export const iContainerSchema = iNodeSchema.extend({
  name: z.string(),
  detail: iDetailSchema.nullable(),
});

export type IContainer = z.infer<typeof iContainerSchema>;

// Concrete Container types (covariant returns: narrows detail to specific type)
export const containerXSchema = z.object({
  __typename: z.literal('ContainerX'),
  id: uuidSchema,
  name: z.string(),
  detail: detailASchema.nullable(),
});

export type ContainerX = z.infer<typeof containerXSchema>;

export const containerYSchema = z.object({
  __typename: z.literal('ContainerY'),
  id: uuidSchema,
  name: z.string(),
  detail: detailBSchema.nullable(),
});

export type ContainerY = z.infer<typeof containerYSchema>;

export const containerSchema = z.discriminatedUnion('__typename', [containerXSchema, containerYSchema]);

export type Container = z.infer<typeof containerSchema>;
