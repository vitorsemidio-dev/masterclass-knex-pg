const knex = require('../database');

class ProjectController {
  async index(req, res, next) {
    try {
      const { user_id } = req.query;

      const query = knex('projects');
      
      if (user_id) {
        query.where({ user_id });
      }

      const results = await query;

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
