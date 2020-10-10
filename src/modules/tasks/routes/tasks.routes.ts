import express, { Request, Response } from 'express';
import TasksRepository from '../repositories/TasksRepository';

const tasksRoutes = express.Router();
const tasksRepository = new TasksRepository();

// Create new Task
tasksRoutes.post('/', (request:Request, response:Response) => {
  const { title, description, date } = request.body;

  const task = tasksRepository.create(title, description, date);

  return response.json(task);
});


// Get all tasks
tasksRoutes.get('/', (request:Request, response:Response) => {
  const tasks = tasksRepository.all();

  return response.json(tasks);
});

export default tasksRoutes;
