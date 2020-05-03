const knex = require('../database');

class UserController {
  async index(req, res) {
    const results = await knex('users')

    return res.json(results);
  }

  async store(req, res, next) {
    try {
      const { username } = req.body;
      await knex('users').insert({
        username,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
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
