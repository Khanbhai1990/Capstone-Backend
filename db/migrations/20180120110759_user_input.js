
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_input', function(table){
      table.increments();
      table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
      table.integer('challenge_id')
      .notNullable()
      .references('id')
      .inTable('challenges')
      .onDelete('CASCADE')
      .index();
      table.text('diary').notNullable();
      table.integer('day_input').notNullable();
      table.integer('self_rate').notNullable();
      table.integer('tracker').notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_input');
};
