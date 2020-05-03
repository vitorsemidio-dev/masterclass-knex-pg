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

  async store(req, res, next) {
    try {
      const { title, user_id } = req.body;

      await knex('projects').insert({
        title,
        user_id,
      });

      return res.send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProjectController();
