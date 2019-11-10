
exports.up = function(knex) {
  return knex.schema.createTable('zip', tbl => {
      tbl.increments('id');

      tbl.text('city', 128).notNullable();
      tbl.integer('zip').unique().notNullable();
      tbl.text('delivery', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('zip')
};
