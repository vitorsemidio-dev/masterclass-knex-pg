const express = require('express');
const routes = express.Router();

const knex = require('./database');

routes.get('/users', (req, res) => {
  knex('users').then((results) => {
    return res.json(results);
  })
});

module.exports = routes;
