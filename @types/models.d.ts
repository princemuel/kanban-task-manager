/*==============================*
          DATA MODELS
    ==============================*/
type AuthFormData = Pick<
  Misc.DeepRequired<IUser>,
  'name' | 'email' | 'password'
>;

interface IData {
  boards: IBoard[];
}
interface IBoard {
  id: string;
  name: string;
  columns: IColumn[];
}
interface IColumn {
  id: string;
  name: string;
  tasks: ITask[];
}
interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}
interface ISubtask {
  id: string;
  title: string;
  done: boolean;
}
