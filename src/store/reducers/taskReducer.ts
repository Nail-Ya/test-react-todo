
import {
  ITask,
  TaskAction,
  TaskState
} from '../../utils/interfaces';
import { tasks } from '../../utils/constants';
import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK_STATUS,
  SEARCH_TASK_BY_NAME,
  SET_TASKS_AFTER_SEARCH
} from '../actions/actionTypes';

const initialState: TaskState = {
  tasks: tasks,
  tasksToShow: tasks
};

export default function taskReducer(
  state: TaskState = initialState,
  action: TaskAction
): TaskState {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          title: action.title!,
          id: Date.now(),
          completed: false
        }],
        tasksToShow: [...state.tasksToShow, {
          title: action.title!,
          id: Date.now(),
          completed: false
        }]
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item: ITask) => item.id !== action.id),
        tasksToShow: state.tasksToShow.filter((item: ITask) => item.id !== action.id)
      };
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((item: ITask) => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed
            };
          };
          return item;
        }),
        tasksToShow: state.tasksToShow.map((item: ITask) => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed
            };
          };
          return item;
        })
      };
    case SEARCH_TASK_BY_NAME:
      return {
        ...state,
        tasksToShow: state.tasksToShow.filter((item: ITask) => {
          return item.title.trim().toLowerCase().includes(action.taskName!.trim().toLowerCase());
        })
      };
    case SET_TASKS_AFTER_SEARCH:
      return {
        ...state,
        tasksToShow: state.tasks
      };
    default:
      return state;
  };
};
