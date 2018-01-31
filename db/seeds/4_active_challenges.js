
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('active_challenges').del()
    .then(function () {
      // Inserts seed entries
      return knex('active_challenges').insert([
        {id: 6, userOne_id: 1, userTwo_id: 2, userThree_id:3, challenge_id:10}
      ]);
    });
};
