/*===============================*
          DATA MODELS
 *===============================*
*/
export interface IData {
  boards: IBoard[];
}
export interface IBoard {
  id: string;
  name: string;
  columns: IColumn[];
}
export interface IColumn {
  id: string;
  name: string;
  tasks: ITask[];
}
export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}
export interface ISubtask {
  id: string;
  title: string;
  isCompleted: boolean;
}
