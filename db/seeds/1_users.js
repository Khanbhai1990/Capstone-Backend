
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'hassan khan', email:"hassan@khan.com", password:"asdf"},
        {name: 'bab doring', email:"bab@doring.com", password:"1234"},
        {name: 'trevor young', email:"trevor@young.com", password:"zxcv"}
      ]);
    });
};
