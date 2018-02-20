
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Hassan Khan', email:"hassan@khan.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {name: 'Bab Doring', email:"bab@doring.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {name: 'Trevor Young', email:"trevor@young.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {name: 'Nmuta Jones', email:"nmuta@jones.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {name: 'Ali Finney', email:"ali@finney.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {name: 'Rahul Sharma', email:"rahul@sharma.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"}
      ]);
    });
};
