import { data } from 'common';
import { Unarray } from './types';

/*===============================*
          DATA MODELS
 *===============================*
*/
export type IData = typeof data;
export type IBoard = Unarray<IData['boards'][0]>;
export type IColumn = Unarray<IBoard['columns'][0]>;
export type ITask = Unarray<IColumn['tasks'][0]> & TaskStatus;
export type ISubtask = Unarray<ITask['subtasks'][0]>;
export type TaskStatus = { status: 'Todo' | 'Doing' | 'Done' };
