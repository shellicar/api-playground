import { type AuthorizationProblem, type CreateEntityPayload, FailureReason, type InnerOne, type MutationEntitiesCreateInput, type OuterAlpha, type ValidationProblem, type ValidationProblemDetails } from '../../generated/graphql';
import { IMutationEntitiesCreateResolver } from './interfaces';

const mockInnerOne: InnerOne = {
  __typename: 'InnerOne',
  id: 'created-inner-one',
  label: 'Created Inner',
  fieldOne: 'Created field',
};

const mockValidationProblem: ValidationProblem = {
  __typename: 'ValidationProblem',
  message: 'Random error: ValidationProblem for testing',
  details: [
    {
      __typename: 'ValidationProblemDetails',
      key: 'test',
      value: 'Random validation error',
      fieldPath: 'input.test',
    } satisfies ValidationProblemDetails,
  ],
};

const mockAuthorizationProblem: AuthorizationProblem = {
  __typename: 'AuthorizationProblem',
  message: 'Random error: AuthorizationProblem for testing',
  requiredPermission: 'test:permission',
};

export class MutationEntitiesCreateResolver extends IMutationEntitiesCreateResolver {
  public async mutate(input: MutationEntitiesCreateInput): Promise<CreateEntityPayload> {
    // Test @oneOf discriminated input - exactly one option will be defined
    const option = input.optionA ?? input.optionB;
    const name = option.name;
    const valueDescription = 'valueA' in option ? `Option A: ${option.valueA}` : `Option B: ${option.valueB}`;

    // Randomly return success or failure to test result unions
    const rand = Math.random();
    if (rand > 0.66) {
      return {
        __typename: 'CreateEntitySuccess',
        recordId: 'new-entity-id',
        entity: {
          __typename: 'OuterAlpha',
          id: 'created-outer-alpha',
          name,
          alphaSpecific: valueDescription,
          inner: mockInnerOne,
        } satisfies OuterAlpha,
      };
    }
    if (rand > 0.33) {
      return {
        __typename: 'CreateEntityFailure',
        status: FailureReason.InvalidInput,
        errors: [mockValidationProblem],
      };
    }
    return {
      __typename: 'CreateEntityFailure',
      status: FailureReason.Unauthorised,
      errors: [mockAuthorizationProblem],
    };
  }
}
