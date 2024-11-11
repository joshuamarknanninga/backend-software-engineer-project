import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '../stores/TaskStore';

const TaskList: React.FC = observer(() => {
  useEffect(() => {
    TaskStore.fetchTasks();
  }, []);

  if (TaskStore.loading) return <div>Loading...</div>;
  if (TaskStore.error) return <div>{TaskStore.error}</div>;

  return (
    <ul>
      {TaskStore.tasks.map(task => (
        <li key={task._id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => TaskStore.toggleTask(task._id)}
          />
          {task.title}
          <button onClick={() => TaskStore.deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default TaskList;
