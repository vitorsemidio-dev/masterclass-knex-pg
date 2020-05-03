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

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('users').where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.body;
      await knex('users')
        .update({ username })
        .where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async show(req, res) {
    return res.json({ show: true });
  }
}

module.exports = new UserController();
