
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { title: 'Primeiro Projeto', user_id: 1 },
      ]);
    });
};
