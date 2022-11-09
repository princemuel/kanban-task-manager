import data from 'lib/data/data.json';
import { Arg, ID, Query, Resolver } from 'type-graphql';
import { Board } from '../models';

@Resolver(Board)
export class BoardsResolver {
  @Query(() => [Board])
  boards(): Board[] {
    return data?.boards;
  }

  @Query(() => Board, { nullable: true })
  board(@Arg('id', (type) => ID) id: string): Board {
    const board = data?.boards?.find((board) => board.id === id);
    if (board === undefined) {
      throw new Error('Board not found');
    }
    return board;
  }
}
