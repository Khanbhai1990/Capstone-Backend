
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_rate').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_rate').insert([
        {user_id: 1, active_challenge_id: 1, day_rate: 1, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 1, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 2, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 2, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 3, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 3, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 4, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 4, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 5, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 5, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 6, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 6, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 7, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 7, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 8, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 8, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 9, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 9, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 10, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 1, active_challenge_id: 1, day_rate: 10, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 1, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 1, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 2, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 2, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 3, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 3, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 4, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 4, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 5, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 5, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 6, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 6, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 7, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 7, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 8, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 8, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 9, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 9, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 10, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 2, active_challenge_id: 1, day_rate: 10, friend_id:3, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 1, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 1, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 2, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 2, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 3, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 3, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 4, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 4, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 5, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 5, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 6, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 6, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 7, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 7, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 8, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 8, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 9, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 9, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 10, friend_id:2, rating: Math.floor(Math.random() * Math.floor(6))},
        {user_id: 3, active_challenge_id: 1, day_rate: 10, friend_id:1, rating: Math.floor(Math.random() * Math.floor(6))}
      ]);
    });
};
