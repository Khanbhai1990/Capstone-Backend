
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenges').del()
    .then(function () {
      // Inserts seed entries
      return knex('challenges').insert([
        {
          id:10,
          user_id: 1,
          paralax: 'http://nowdaily.com/wp-content/uploads/21-yoga-poses-cover-image.jpg?ffc0e9',
          challenge:"Aubrey Lincoln's Yoga Challenge",
          description:"Give us 10 days to change your life",
          tracker_name:"calories"
          }
      ]);
    });
};
