const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

routes
  // Users
  .get('/users', UserController.index)
  .post('/users', UserController.store)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  .get('/users/:id', UserController.show)
  // Projects
  .get('/projects', ProjectController.index)
  .post('/projects', ProjectController.store)

module.exports = routes;
