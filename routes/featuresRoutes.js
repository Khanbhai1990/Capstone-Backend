var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('features').select().then(features => res.json(features))
});

router.get('/:id', function(req, res) {
  knex('features').select().where('id', req.params.id).then(features => res.json(features))
});

router.post('/', function(req, res) {
  knex('features').insert(req.body).then(() => {
    knex('features').select().then(features => res.json(features))
  });
});

router.patch('/:id', function(req, res) {
  knex('features').update(req.body).where('id', req.params.id).then(function() {
    knex('features').select().then(features => res.json(features))
  });
});

router.delete('/:id', function(req, res) {
  knex('features').del().where('id', req.params.id).then(function() {
    knex('features').select().then(features => res.json(features))
  });
});


module.exports = router;
