import { Request, Response } from 'express';
import Task, { ITask } from '../models/Task';

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: ITask[] = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
