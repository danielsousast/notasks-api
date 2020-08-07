import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Started' });
});

export default routes;
