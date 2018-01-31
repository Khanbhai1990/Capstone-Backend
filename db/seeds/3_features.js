
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('features').del()
    .then(function () {
      // Inserts seed entries
      return knex('features').insert([
        {
          challenge_id: 10,
          day: 1,
          video: 'https://www.youtube.com/watch?v=z_1XZ4RUkGE',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://static1.squarespace.com/static/503264b0e4b0dbdecd41e3f6/t/590a05131e5b6ce08768b593/1493828890055/polaroid2.png',
          instructions: 'In the morning before beginning your day and at night before going to bed, lie against a well with your legs up the wall. Scoot your hips so that the base of your low back is agaisnt the wall and your heels are above your hips. Lie with your legs up the wall for 5 minutes in the morning and 10 minutes at night.'},
        {
          challenge_id: 10,
          day: 2,
          video: 'https://www.youtube.com/watch?v=1GjsTRb5xDk',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://static.pexels.com/photos/588561/pexels-photo-588561.jpeg',
          instructions: 'Order and begin the book "Yoga Beyond The Mat" by Alanna Kaivalya'},
        {
          challenge_id: 10,
          day: 3,
          video: 'https://www.youtube.com/watch?v=8s8juJmQHe0',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://chopra.com/sites/default/files/field/image/ManDoingYoga_0.jpg',
          instructions: 'In the morning before beginning your day and at night before going to bed, lie against a well with your legs up the wall. Scoot your hips so that the base of your low back is agaisnt the wall and your heels are above your hips. Lie with your legs up the wall for 5 minutes in the morning and 10 minutes at night.'},
        {
          challenge_id: 10,
          day: 4,
          video: 'https://www.youtube.com/watch?v=z_1XZ4RUkGE',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://www.biovoicenews.com/wp-content/uploads/2016/06/yoga.jpg',
          instructions: 'In the morning before beginning your day and at night before going to bed, lie against a well with your legs up the wall. Scoot your hips so that the base of your low back is agaisnt the wall and your heels are above your hips. Lie with your legs up the wall for 5 minutes in the morning and 10 minutes at night.'},
        {
          challenge_id: 10,
          day: 5,
          video: 'https://www.youtube.com/watch?v=1GjsTRb5xDk',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_guide_assets/yoga-for-everyone_guide_assets-blog480.jpg',
          instructions: 'Invite someone out to for a meal. Tell this person you want them to order for you (obviously inform of them of any dietary restrictions if any) and be ok with whatever they choose. This practice teaches us non-attachment and to allow others to offer their energy to us with non-judgment. Take pictures or videos and thank your meal guest!'},
        {
          challenge_id: 10,
          day: 6,
          video: 'https://www.youtube.com/watch?v=z_1XZ4RUkGE',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnAZoOMNTg5mPPGs6JuxkAFCafLWJ16i8HxyZ-xOaao6ASm_Y',
          instructions: 'Order and begin the book "Yoga Beyond The Mat" by Alanna Kaivalya'},
        {
          challenge_id: 10,
          day: 7,
          video: 'https://www.youtube.com/watch?v=8s8juJmQHe0',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://greatist.com/sites/default/files/yoga-flow-beginners.jpg',
          instructions: 'In the morning before beginning your day and at night before going to bed, lie against a well with your legs up the wall. Scoot your hips so that the base of your low back is agaisnt the wall and your heels are above your hips. Lie with your legs up the wall for 5 minutes in the morning and 10 minutes at night.'},
        {
          challenge_id: 10,
          day: 8,
          video: 'https://www.youtube.com/watch?v=1GjsTRb5xDk',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'http://img1.gtimg.com/16/1633/163379/16337944_980x1200_0.jpg',
          instructions: 'Invite someone out to for a meal. Tell this person you want them to order for you (obviously inform of them of any dietary restrictions if any) and be ok with whatever they choose. This practice teaches us non-attachment and to allow others to offer their energy to us with non-judgment. Take pictures or videos and thank your meal guest!'},
        {
          challenge_id: 10,
          day: 9,
          video: 'https://www.youtube.com/watch?v=8s8juJmQHe0',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'https://www.caseydilworth.com/wp-content/uploads/2016/09/snoring-yoga.jpg',
          instructions: 'Order and begin the book "Yoga Beyond The Mat" by Alanna Kaivalya'},
        {
          challenge_id: 10,
          day: 10,
          video: 'https://www.youtube.com/watch?v=1GjsTRb5xDk',
          audio: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68276792&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
          image: 'http://cdn2.stylecraze.com/wp-content/uploads/2013/08/35-24-Best-Yoga-Poses-To-Lose-Weight-Quickly-And-Easily_452500954.jpg',
          instructions: 'Invite someone out to for a meal. Tell this person you want them to order for you (obviously inform of them of any dietary restrictions if any) and be ok with whatever they choose. This practice teaches us non-attachment and to allow others to offer their energy to us with non-judgment. Take pictures or videos and thank your meal guest!'}
      ]);
    });
};
