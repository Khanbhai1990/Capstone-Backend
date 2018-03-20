var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user_input').select().then(user_input => res.json(user_input))
});

router.get('/:active/:user/:day', function(req, res) {
  knex('user_input').select().where({'active_challenge_id': req.params.active, 'user_id': req.params.user, "day_input": req.params.day}).then(user_input => res.json(user_input))
});


router.post('/', function(req, res) {
  knex('user_input').insert(req.body).then(() => {
    knex('user_input').select().then(user_input => res.json(user_input))
  });
});

router.patch('/:id', function(req, res) {
  knex('user_input').update(req.body).where('id', req.params.id).then(function() {
    knex('user_input').select().then(user_input => res.json(user_input))
  });
});

router.delete('/:id', function(req, res) {
  knex('user_input').del().where('id', req.params.id).then(function() {
    knex('user_input').select().then(user_input => res.json(user_input))
  });
});


module.exports = router;
