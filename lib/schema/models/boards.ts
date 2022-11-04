import { Field, ID, ObjectType } from 'type-graphql';
import { Column } from './columns';

@ObjectType()
export class Board {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => [Column])
  columns?: Column[];
}

// @Resolver(Board)
// export class BoardsResolver {
//   @Query(() => [Board])
//   boards(): Board[] {
//     return [
//       { id: 'hddd', name: 'Platform Launch', columns: ['hello'] },
//       { id: 'hdd', name: 'Marketing Plan', columns: ['hello'] },
//     ];
//   }
// }
