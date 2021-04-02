export interface ITask {
  title: string;
  id: number;
  completed: boolean;
};

export type TaskAction = {
  type: string;
  title?: string;
  id?: number;
  taskName?: string;
};

export type TaskState = {
  tasks: Array<ITask>;
  tasksToShow: Array<ITask>;
};
