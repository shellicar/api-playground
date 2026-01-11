import type { Container, ContainerX, ContainerY, DetailA, DetailB, QueryContainersGetInput } from '../../generated/graphql';
import { IQueryContainersGetResolver } from './interfaces';

const mockDetailA: DetailA = {
  __typename: 'DetailA',
  id: 'detail-a-1',
  value: 'Detail A value',
  specificA: 100,
};

const mockDetailB: DetailB = {
  __typename: 'DetailB',
  id: 'detail-b-1',
  value: 'Detail B value',
  specificB: false,
};

const mockContainerX: ContainerX = {
  __typename: 'ContainerX',
  id: 'container-x-1',
  name: 'Test Container X',
  detail: mockDetailA,
};

const mockContainerY: ContainerY = {
  __typename: 'ContainerY',
  id: 'container-y-1',
  name: 'Test Container Y',
  detail: mockDetailB,
};

export class QueryContainersGetResolver extends IQueryContainersGetResolver {
  public async query(_input: QueryContainersGetInput): Promise<Container | null> {
    // Randomly return ContainerX or ContainerY to test covariant returns
    return Math.random() > 0.5 ? mockContainerX : mockContainerY;
  }
}
