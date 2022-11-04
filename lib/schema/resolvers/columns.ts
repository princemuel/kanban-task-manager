import { data } from 'lib/data';
import { Query, Resolver } from 'type-graphql';
import { Column } from '../models';

@Resolver(Column)
export class ColumnsResolver {
  @Query(() => [Column])
  columns(): Column[] {
    //@ts-expect-error
    return data?.boards?.[0]?.columns;
  }
}
