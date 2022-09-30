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
  status: 'Todo' | 'Doing' | 'Done';
  subtasks: ISubtask[];
}

export interface ISubtask {
  title: string;
  isCompleted: boolean;
}
