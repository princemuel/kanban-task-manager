import { Field, ID, ObjectType } from 'type-graphql';
import { Column } from './columns';
@ObjectType({ description: 'The board model' })
export class Board {
  @Field((type) => ID)
  readonly id!: string;

  @Field({ description: 'The name of the board' })
  name!: string;

  @Field((type) => [Column], { nullable: true })
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
