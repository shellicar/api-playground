import { FailureReason } from '../../trpc/schemas/base';
import type { CreateEntityInput } from '../../trpc/schemas/discriminated-inputs';
import type { CreateEntityPayload } from '../../trpc/schemas/result-unions';
import { IMutationEntitiesCreateResolver } from './interfaces';

export class MutationEntitiesCreateResolver extends IMutationEntitiesCreateResolver {
  public async mutate(input: CreateEntityInput): Promise<CreateEntityPayload> {
    // TODO: Implement
    return {
      __typename: 'CreateEntityFailure',
      status: FailureReason.NotFound,
      errors: [],
    };
  }
}
