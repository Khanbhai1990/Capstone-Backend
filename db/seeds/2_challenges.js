
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenges').del()
    .then(function () {
      // Inserts seed entries
      return knex('challenges').insert([
        {
          user_id: 1,
          paralax: 'http://boiseyogainstructor.com/wp-content/uploads/2014/12/yoga-sunset-meditate.jpg',
          challenge:"Aubrey Lincoln's Yoga Challenge (with full content)",
          description:"Give us 10 days to change your life",
          tracker_name:"Calories Intake"
        },
        {
          user_id: 2,
          paralax: 'https://www.meghantelpner.com/wp-content/uploads/2017/10/No-Sugar-Challenge-Logo-Product.jpg',
          challenge:"No  Added Sugar Challenge (filler)",
          description:"Tough but worth the effort!",
          tracker_name:"Calories Intake"
        },
        {
          user_id: 4,
          paralax: 'https://www.spinlister.com/blog/wp-content/uploads/2016/12/chicago-lakefront-trail-1.jpg',
          challenge:"Tour de Chicago!! (filler)",
          description:"Experience the 10 Best Bike Routes in Chicago",
          tracker_name:"Distance by Miles"
        },
        {
          user_id: 4,
          paralax: 'https://lever-client-logos.s3.amazonaws.com/aabb6500-50b4-48ca-be35-be09bf010b1e-1491527679420.png',
          challenge:"Complete a Galvanize Capstone Project in 10 Days (filler)",
          description:"Unfamiliar environment?? No problem!! ",
          tracker_name:"By Github Submits"
        },
        {
          user_id: 5,
          paralax: 'http://needleinthehay.net/wp-content/uploads/2015/05/6834925-sci-fi-wallpaper.jpg',
          challenge:"How to Write a Sci Fi Story in 10 days (filler)",
          description:"You Hugo is waiting for you just around the corner ;)",
          tracker_name:"By Total Words"
        },
        {
          user_id: 6,
          paralax: 'https://www.destructoid.com//ul/400082-pmdy2395.jpg',
          challenge:"Binge Watch Pokemon for Ten Days Straight (filler)",
          description:"Get your space diapers ready!!!",
          tracker_name:"By Total Bathroom Breaks"
        }

      ]);
    });
};
