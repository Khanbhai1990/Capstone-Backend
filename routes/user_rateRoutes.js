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
