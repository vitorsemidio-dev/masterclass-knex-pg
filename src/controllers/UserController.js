const knex = require('../database');

class UserController {
  async index(req, res) {
    const results = await knex('users')

    return res.json(results);
  }
}

module.exports = new UserController();
