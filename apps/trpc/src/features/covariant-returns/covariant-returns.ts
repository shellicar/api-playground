import { z } from 'zod';
import { iNodeSchema } from '../shared/base';

// IDetail interface
const iDetailSchema = iNodeSchema.extend({
  value: z.string(),
});

// Concrete Detail types
const detailASchema = iDetailSchema.extend({
  __typename: z.literal('DetailA'),
  specificA: z.number(),
});

const detailBSchema = iDetailSchema.extend({
  __typename: z.literal('DetailB'),
  specificB: z.boolean(),
});

// const detailSchema = z.discriminatedUnion('__typename', [detailASchema, detailBSchema]);

// IContainer interface
const iContainerSchema = iNodeSchema.extend({
  name: z.string(),
  detail: iDetailSchema.nullable(),
});

// export type IContainer = z.infer<typeof iContainerSchema>;

// Concrete Container types (covariant returns: narrows detail to specific type)
const containerXSchema = iContainerSchema.extend({
  __typename: z.literal('ContainerX'),
  detail: detailASchema.nullable(),
});

// export type ContainerX = z.infer<typeof containerXSchema>;

const containerYSchema = iContainerSchema.extend({
  __typename: z.literal('ContainerY'),
  detail: detailBSchema.nullable(),
});

// export type ContainerY = z.infer<typeof containerYSchema>;

export const containerSchema = z.discriminatedUnion('__typename', [containerXSchema, containerYSchema]);

export type Container = z.infer<typeof containerSchema>;
