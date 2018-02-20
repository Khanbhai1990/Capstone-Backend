var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('active_challenges').select().then(active_challenges => {
    res.json(active_challenges)
    let obj = active_challenges[0].startTime
    console.log(obj.day)
  })
});

router.get('/:id', function(req, res) {
  knex('active_challenges').select().where('id', req.params.id).then(active_challenges => res.json(active_challenges))
});

// router.get('/user_chall/:id', function(req, res) {
//   knex('active_challenges')
//     .where('userOne_id', req.params.id)
//     .orWhere('userTwo_id', req.params.id)
//     .orWhere('userThree_id', req.params.id)
//     .then((active_challenges) => {
//       knex('challenges')
//         .select()
//         .where('id', active_challenges[0].challenge_id)
//         .then(data => res.json(data))
//     })
// });
//
// router.get('/user_chall/:id', function(req, res) {
//   knex('active_challenges')
//     .where('userOne_id', req.params.id)
//     .orWhere('userTwo_id', req.params.id)
//     .orWhere('userThree_id', req.params.id)
//     .then((active_challenges) => {
//       knex('active_challenges')
//         .select("active_challenges.active", "active_challenges.challenge_id", "challenges.challenge", "challenges.description", "active_challenges.id", "challenges.paralax")
//         .join('challenges', active_challenges[0].challenge_id, 'challenges.id')
//         .then(data => res.json(data))
//     })
// });

router.get('/user_chall/:id', function(req, res) {
  knex('active_challenges')
    .where('userOne_id', req.params.id)
    .orWhere('userTwo_id', req.params.id)
    .orWhere('userThree_id', req.params.id)
    .select("active_challenges.active", "active_challenges.challenge_id", "challenges.challenge", "challenges.description", "active_challenges.id", "challenges.paralax")
    .join('challenges', "challenge_id", 'challenges.id')
    .then(data => res.json(data))
});

router.get('/complete/:challenge/:day', function(req, res) {
  knex('features')
    .select()
    .join('challenges', 'features.challenge_id', 'challenges.id')
    .join('active_challenges', "active_challenges.challenge_id", 'challenges.id'  )
    .where('features.challenge_id', req.params.challenge)
    .where('features.day', req.params.day)
    .then(data => res.json(data))
});

// router.get('/active/:id', function(req,res){
//     knex('active_challenges')
//       .select("active_challenges.challenge_id")
//       .then((chall_id)=> {
//           knex('')
//       })
// })

router.post('/', function(req, res) {
  knex('active_challenges').insert(req.body).then(() => {
    knex('active_challenges').select().then(active_challenges => res.json(active_challenges.data[data.length-1]))
  });
});

router.patch('/:id', function(req, res) {
  knex('active_challenges').update(req.body).where('id', req.params.id).then(function() {
    knex('active_challenges').select().then(active_challenges => res.json(active_challenges))
  });
});

router.delete('/:id', function(req, res) {
  knex('active_challenges').del().where('id', req.params.id).then(function() {
    knex('active_challenges').select().then(active_challenges => res.json(active_challenges))
  });
});


module.exports = router;
