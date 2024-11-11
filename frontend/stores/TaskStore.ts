import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface ITask {
  _id: string;
  title: string;
  completed: boolean;
}

class TaskStore {
  tasks: ITask[] = [];
  loading: boolean = false;
  error: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    this.loading = true;
    try {
      const response = await axios.get('/api/tasks');
      this.tasks = response.data;
    } catch (err) {
      this.error = 'Failed to fetch tasks';
    } finally {
      this.loading = false;
    }
  };

  addTask = async (title: string) => {
    try {
      const response = await axios.post('/api/tasks', { title });
      this.tasks.push(response.data);
    } catch (err) {
      this.error = 'Failed to add task';
    }
  };

  toggleTask = async (id: string) => {
    try {
      const task = this.tasks.find(t => t._id === id);
      if (task) {
        const updated = await axios.put(`/api/tasks/${id}`, { completed: !task.completed });
        task.completed = updated.data.completed;
      }
    } catch (err) {
      this.error = 'Failed to update task';
    }
  };

  deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      this.tasks = this.tasks.filter(t => t._id !== id);
    } catch (err) {
      this.error = 'Failed to delete task';
    }
  };
}

export default new TaskStore();
