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
const users = require('./routes/usersRoutes');
const challenges = require('./routes/challengesRoutes');
const features = require('./routes/featuresRoutes');
const user_input = require('./routes/user_inputRoutes');
const user_rate = require('./routes/user_rateRoutes');
const group_chat = require('./routes/group_chatRoutes');

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});



app.use((req, res,))

app.use('/', index);
app.use('/users', users);
app.use('/challenges', challenges);
app.use('/features', features);
app.use('/user_input', user_input);
app.use('/user_rate', user_rate);
app.use('/group_chat', group_chat);

app.listen(port, function() {
console.log("listening on port: ", port);
})
