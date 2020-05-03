const knex = require('../database');

class UserController {
  async index(req, res) {
    const results = await knex('users')

    return res.json(results);
  }

  async store(req, res) {

    const { username } = req.body;
    await knex('users').insert({
      username,
    });
    return res.json({ store: true });
  }

  async delete(req, res) {
    return res.json({ delete: true });
  }

  async update(req, res) {
    return res.json({ update: true });
  }

  async show(req, res) {
    return res.json({ show: true });
  }
}

module.exports = new UserController();
