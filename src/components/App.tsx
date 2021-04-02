import React from 'react';
import { TaskCreator } from './TaskCreator';
import { TaskList } from './TaskList';
import { Search } from './Search';

export const App: React.FC = () => {
  return (
    <>
      <Search />
      <div className="container">
        <TaskCreator />
        <TaskList />
      </div>
    </>
  );
}
