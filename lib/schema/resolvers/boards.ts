import { data } from 'lib/data';
import { Query, Resolver } from 'type-graphql';
import { Board } from '../models';

@Resolver(Board)
export class BoardsResolver {
  @Query(() => [Board])
  boards(): Board[] {
    //@ts-expect-error
    return data?.boards;
  }
}
