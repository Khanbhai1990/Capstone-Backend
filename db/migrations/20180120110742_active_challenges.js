exports.up = function(knex, Promise) {
  return knex.schema.createTable('active_challenges', function(table){
      table.increments();
      table.integer('userOne_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
      table.integer('userTwo_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
      table.integer('userThree_id')
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
      table.boolean('active').defaultsTo(true);
      table.string("startTime").defaultsTo("1518941230");
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('active_challenges');
};
