import { FailureReason } from '../shared/base';
import type { MutationEntitiesCreateInput } from './discriminated-inputs';
import { IMutationEntitiesCreateResolver } from './interfaces';
import type { CreateEntityPayload } from './nested-polymorphism-mutations';

export class MutationEntitiesCreateResolver extends IMutationEntitiesCreateResolver {
  public async mutate(_input: MutationEntitiesCreateInput): Promise<CreateEntityPayload> {
    // TODO: Implement
    return {
      __typename: 'CreateEntityFailure',
      status: FailureReason.NotFound,
      errors: [],
    };
  }
}
