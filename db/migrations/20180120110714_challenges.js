
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', function(table){
      table.increments();
      table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
      table.string('challenge').notNullable();
      table.boolean('active').defaultsTo(true);
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
