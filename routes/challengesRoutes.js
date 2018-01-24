var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('challenges').select().then(challenges => res.json(challenges))
});

router.get('/:id', function(req, res) {
  knex('challenges').select().where('id', req.params.id).then(challenges => res.json(challenges))
});

router.post('/', function(req, res) {
  knex('challenges').insert(req.body).then(() => {
    knex('challenges').select().then(challenges => res.json(challenges))
  });
});

router.patch('/:id', function(req, res) {
  knex('challenges').update(req.body).where('id', req.params.id).then(function() {
    knex('challenges').select().then(challenges => res.json(challenges))
  });
});

router.delete('/:id', function(req, res) {
  knex('challenges').del().where('id', req.params.id).then(function() {
    knex('challenges').select().then(challenges => res.json(challenges))
  });
});


module.exports = router;
