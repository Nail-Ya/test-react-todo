import React from 'react';
import { ITask } from '../utils/interfaces';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTaskStatus, removeTask } from '../store/actions/taskActionCreators';

type Props = {
  task: ITask;
}

export const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const taskClassName: string = classnames('task', {
    'completed': task.completed
  });

  return (
    <li className={taskClassName}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(changeTaskStatus(task.id))}
        />
        <span>{task.title}</span>
        <i
          className="material-icons red-text"
          onClick={() => dispatch(removeTask(task.id))}
        >
          delete
        </i>
      </label>
    </li>
  )
}
