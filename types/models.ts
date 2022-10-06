/*===============================*
          DATA MODELS
 *===============================*
*/
export interface IData {
  boards: IBoard[];
}
export interface IBoard {
  name: string;
  columns: IColumn[];
}
export interface IColumn {
  name: string;
  tasks: ITask[];
}
export interface ITask {
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: ISubtask[];
}
export interface ISubtask {
  title: string;
  isCompleted: boolean;
}
export type TaskStatus = { status: 'Todo' | 'Doing' | 'Done' };
