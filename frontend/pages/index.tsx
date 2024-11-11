import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskStore from '../stores/TaskStore';

const Home: React.FC = () => {
  const [title, setTitle] = useState('');

  const addTask = () => {
    if (title.trim()) {
      TaskStore.addTask(title);
      setTitle('');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <TaskList />
    </div>
  );
};

export default Home;
