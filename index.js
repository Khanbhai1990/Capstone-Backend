const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const auth = require('./routes/authRoutes');
const challenges = require('./routes/challengesRoutes');
const features = require('./routes/featuresRoutes');
const user_input = require('./routes/userInputRoutes');
const user_rate = require('./routes/userRateRoutes');
const active_challenges = require('./routes/activeChallengesRoutes');

// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// const functions = require('firebase-functions');
//
// // The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
//     next();
// });




app.use('/', index);
app.use('/auth', auth);
app.use('/challenges', challenges);
app.use('/features', features);
app.use('/user_input', user_input);
app.use('/user_rate', user_rate);
app.use('/active_challenges', active_challenges);

app.listen(port, function() {
console.log("listening on port: ", port);
})
