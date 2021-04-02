import React from 'react';
import { useDispatch } from 'react-redux';
import { searchTaskByName, setTasksAfterSearch } from '../store/actions/taskActionCreators';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    // если input пустой, то вернуть все таски
    inputValue.length === 0 ? dispatch(setTasksAfterSearch()) : dispatch(searchTaskByName(inputValue));
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              onChange={(evt) => setInputValue(evt.target.value)}
            />
            <label
              className="label-icon"
              htmlFor="search"
            >
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => dispatch(setTasksAfterSearch())}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
}
