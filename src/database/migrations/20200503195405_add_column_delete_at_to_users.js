
exports.up = function(knex) {
  return knex.schema.alterTable('users', (table) => {
    table.timestamp('deleted_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumn('deleted_at');
};
