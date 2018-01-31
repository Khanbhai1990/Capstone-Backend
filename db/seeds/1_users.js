
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'hassan khan', email:"hassan@khan.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:2, name: 'bab doring', email:"bab@doring.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:3, name: 'trevor young', email:"trevor@young.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"}
      ]);
    });
};
