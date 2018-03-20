var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user_rate').select().then(user_rate => res.json(user_rate))
});

router.get('/:id', function(req, res) {
  knex('user_rate').select().where('id', req.params.id).then(user_rate => res.json(user_rate))
});

router.get('/ranking/:active', function(req,res) {
  knex('active_challenges')
    .where('id', req.params.active)
    .select('userOne_id', 'userTwo_id', 'userThree_id')
    .then((data) =>{
      knex('users')
        .select("name", "id")
        .where('id', data[0].userOne_id)
        .orWhere('id', data[0].userTwo_id)
        .orWhere('id', data[0].userThree_id)
        .then((result)=> res.json(result))
    })
})

router.get('/acc/:active/:friend', function(req,res){
    knex('user_rate')
      .where('active_challenge_id', req.params.active)
      .where('friend_id', req.params.friend)
      .sum('rating')
      .then((result)=> res.json(result))
})

router.get('/check/:active/:user/:day', function(req, res) {
  knex('user_rate').select().where({'active_challenge_id':req.params.active, 'user_id':req.params.user, 'day_rate':req.params.day}).then(user_rate => res.json(user_rate))
});



router.post('/', function(req, res) {
  knex('user_rate').insert(req.body).then(() => {
    knex('user_rate').select().then(user_rate => res.json(user_rate))
  });
});

router.patch('/:id', function(req, res) {
  knex('user_rate').update(req.body).where('id', req.params.id).then(function() {
    knex('user_rate').select().then(user_rate => res.json(user_rate))
  });
});

router.delete('/:id', function(req, res) {
  knex('user_rate').del().where('id', req.params.id).then(function() {
    knex('user_rate').select().then(user_rate => res.json(user_rate))
  });
});


module.exports = router;
