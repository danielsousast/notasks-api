import express from 'express';
import taskRoutes from '../modules/tasks/routes/tasks.routes';

const routes = express.Router();

routes.use('/tasks', taskRoutes);

export default routes;
