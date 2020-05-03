const knex = require('../database');

class ProjectController {
  async index(req, res, next) {
    try {
      const results = await knex('projects');

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProjectController();
