import { Field, ID, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
export class Board {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field((type) => [String])
  columns?: string[];
}

@Resolver(Board)
export class BoardsResolver {
  @Query(() => [Board])
  boards(): Board[] {
    return [
      { id: 'hddd', name: 'Platform Launch', columns: ['hello'] },
      { id: 'hdd', name: 'Marketing Plan', columns: ['hello'] },
    ];
  }
}
