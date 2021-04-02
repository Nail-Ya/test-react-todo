import React from 'react';
import { RootState } from '../store/reducers/rootReducer';
import { ITask } from '../utils/interfaces';
import { useSelector } from 'react-redux';
import { Task } from './Task';

export const TaskList: React.FC = () => {
  const tasksToShow: Array<ITask> = useSelector((state: RootState) => state.task.tasksToShow);

  return (
    tasksToShow.length === 0
      ?
      (<p className="center">Дел нет</p>)
      :
      (
        <ul>
          {
            tasksToShow.map((task: ITask) =>
              <Task
                key={task.id}
                task={task}
              />
            )
          }
        </ul>
      )
  );
}
