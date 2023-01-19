var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

var dataController = require('./data/index');
app.use('/', dataController);

module.exports = app;
