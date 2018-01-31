
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', function(table){
      table.increments();
      table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
      table.string('paralax').notNullable();
      table.string('description').notNullable();
      table.string('tracker_name').notNullable();
      table.string('challenge').notNullable().unique();
      table.boolean('listed').defaultsTo(false);
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
