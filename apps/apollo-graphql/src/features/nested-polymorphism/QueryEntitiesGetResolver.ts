import type { GetEntityInput, InnerOne, InnerTwo, Outer, OuterAlpha, OuterBeta } from '../../generated/graphql';
import { IQueryEntitiesGetResolver } from './interfaces';

const mockInnerOne: InnerOne = {
  __typename: 'InnerOne',
  id: 'inner-one-1',
  label: 'Inner One',
  fieldOne: 'Field One value',
};

const mockInnerTwo: InnerTwo = {
  __typename: 'InnerTwo',
  id: 'inner-two-1',
  label: 'Inner Two',
  fieldTwo: 42,
};

const mockOuterAlpha: OuterAlpha = {
  __typename: 'OuterAlpha',
  id: 'outer-alpha-1',
  name: 'Test Outer Alpha',
  alphaSpecific: 'Alpha specific field',
  inner: mockInnerOne,
};

const mockOuterBeta: OuterBeta = {
  __typename: 'OuterBeta',
  id: 'outer-beta-1',
  name: 'Test Outer Beta',
  betaSpecific: true,
  inner: mockInnerTwo,
};

export class QueryEntitiesGetResolver extends IQueryEntitiesGetResolver {
  public async query(_input: GetEntityInput): Promise<Outer | null> {
    // Randomly return OuterAlpha or OuterBeta to test nested polymorphism
    return Math.random() > 0.5 ? mockOuterAlpha : mockOuterBeta;
  }
}
