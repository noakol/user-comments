const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./route/comments.router');
const mongoose = require('mongoose');

const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://noanoa:abc123@ds135974.mlab.com:35974/reviews';
let mongoDB = dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/comments/', comments);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);