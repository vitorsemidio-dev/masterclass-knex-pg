const knex = require('../database');

class ProjectController {
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;

      const query = knex('projects')
      .limit(5)
      .offset((page - 1) * 5);
      
      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'projects.user_id')
          .select('projects.*', 'users.username');
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
