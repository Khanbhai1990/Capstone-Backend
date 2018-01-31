
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_input').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_input').insert([
        // {
        //   user_id: 1,
        //   active_challenge_id: 6,
        //   diary: "my name is Hassan and my day went great",
        //   day_input: 1, self_rate: Math.floor(Math.random() * Math.floor(6)),
        //   tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 2, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 3, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 4, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 5, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 6, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 7, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 8, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 9, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 1,
          active_challenge_id: 6,
          diary: "my name is Hassan and my day went great",
          day_input: 10, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 1, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 2, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 3, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 4, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 5, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 6, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 7, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 8, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 9, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 2,
          active_challenge_id: 6,
          diary: "my name is Babs and my day went great",
          day_input: 10, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 1, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(2500))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 2, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 3, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 4, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 5, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 6, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 7, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 8, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 9, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))},
        {
          user_id: 3,
          active_challenge_id: 6,
          diary: "my name is Trevor and my day went great",
          day_input: 10, self_rate: Math.floor(Math.random() * Math.floor(6)),
          tracker: Math.floor(Math.random() * Math.floor(3000))}
      ]);
    });
};
