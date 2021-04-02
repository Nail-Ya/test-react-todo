import { TaskAction } from '../../utils/interfaces';
import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK_STATUS,
  SEARCH_TASK_BY_NAME,
  SET_TASKS_AFTER_SEARCH
} from './actionTypes';

export function addTask(title: string): TaskAction {
  return {
    type: ADD_TASK,
    title
  };
};

export function removeTask(id: number): TaskAction {
  return {
    type: REMOVE_TASK,
    id
  };
};

export function changeTaskStatus(id: number): TaskAction {
  return {
    type: CHANGE_TASK_STATUS,
    id
  };
};

export function searchTaskByName(taskName: string): TaskAction {
  return {
    type: SEARCH_TASK_BY_NAME,
    taskName
  };
};

export function setTasksAfterSearch(): TaskAction {
  return {
    type: SET_TASKS_AFTER_SEARCH,
  };
};
