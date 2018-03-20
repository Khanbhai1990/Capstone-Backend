var express = require('express');
const jwt = require('jsonwebtoken');
// const exjwt = require('express-jwt');
var router = express.Router();
var knex = require('../db/knex');
const bcrypt = require('bcrypt-nodejs')

// router.post('/signup', function(req, res) {
//   knex('users').insert(req.body).then(() => {
//     knex('users').select().then(users => res.json(users))
//   });
// });

router.post('/signup', function(req, res) {
  // Should have some validation for security
  bcrypt.hash(req.body.password, null, null, function(err, hash) {
    req.body.password = hash
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newUser => res.send(newUser[0]))
  })
})

router.post('/login', function(req, res) {
  knex('users')
    .where('email', req.body.email)
    .then(user => {
      if (user.length > 0) {
        let token = jwt.sign({ user }, 'secret-string')
        res.send({
          user,
          token
        })
      } else {
        res.status(401).send('Invalid Login')
      }
    })
})

router.get('/users', function(req, res, next) {
  knex('users').select().then(users => res.json(users))
});

router.get('/user', function(req, res) {
  res.send({ name: 'james' })
})

router.get('/refresh', function(req, res) {
  res.send({ name: 'james' })
})

module.exports = router
