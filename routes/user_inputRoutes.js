var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user_input').select().then(user_input => res.json(user_input))
});

router.get('/:id', function(req, res) {
  knex('user_input').select().where('id', req.params.id).then(user_input => res.json(user_input))
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
