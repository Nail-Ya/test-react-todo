import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActionCreators';

export const TaskCreator: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState<string>('');

  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      dispatch(addTask(title));
      setTitle('');
    };
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Введите название дела"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        onKeyPress={keyPressHandler}
      />
      <label
        htmlFor="title"
        className="active"
      >
        Введите название дела
      </label>
    </div>
  );
}
