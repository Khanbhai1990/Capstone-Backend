
exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', function(table){
      table.increments();
      table.integer('challenge_id')
      .notNullable()
      .references('id')
      .inTable('challenges')
      .onDelete('CASCADE')
      .index();
      table.integer('day').notNullable();
      table.string('video').defaultsTo("https://www.youtube.com/watch?v=STl3eifhkm4")
      table.text('audio').defaultsTo(`<iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=orange_white&size=32" style="width: 32px; height: 32px;"></iframe>`);
      table.string('image').defaultsTo("http://cdn7.bigcommerce.com/s-frpbc5/images/stencil/original/products/1477/2368/EU20456_450x300_POLY__65377.1501221190.jpg?c=2&imbypass=on");
      table.text('instructions').defaultsTo("this is a test");
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('features');
};
