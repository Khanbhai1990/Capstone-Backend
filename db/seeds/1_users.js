
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1, name: 'Hassan Khan', email:"hassan@khan.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:2, name: 'Bab Doring', email:"bab@doring.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:3, name: 'Trevor Young', email:"trevor@young.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:4, name: 'Nmuta Jones', email:"nmuta@jones.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:5, name: 'Ali Finney', email:"ali@finney.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"},
        {id:6, name: 'Rahul Sharma', email:"rahul@sharma.com", password:"$2a$10$0STBcY.y6CRWxAy6cZ8XbONBSll4TmG/A0n2X9xW5tLdzDeWawf6S"}
      ]);
    });
};
