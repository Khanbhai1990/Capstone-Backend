var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('group_chat').select().then(group_chat => res.json(group_chat))
});

router.get('/:id', function(req, res) {
  knex('group_chat').select().where('id', req.params.id).then(group_chat => res.json(group_chat))
});

router.post('/', function(req, res) {
  knex('group_chat').insert(req.body).then(() => {
    knex('group_chat').select().then(group_chat => res.json(group_chat))
  });
});

router.patch('/:id', function(req, res) {
  knex('group_chat').update(req.body).where('id', req.params.id).then(function() {
    knex('group_chat').select().then(group_chat => res.json(group_chat))
  });
});

router.delete('/:id', function(req, res) {
  knex('group_chat').del().where('id', req.params.id).then(function() {
    knex('group_chat').select().then(group_chat => res.json(group_chat))
  });
});


module.exports = router;
