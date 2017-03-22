var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser() this will let us get the data from a POST
// request
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Enable CORS for local testing
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/reduxcrud');

// Load routes
var test = require('./routes/test');
var items = require('./routes/items');

// Use routes in app, prefixed with /api/v1
app.use('/', test);
app.use('/api/v1/items', items);

// Start the server
var server = app.listen(3001, function() {
  var port = server.address().port;
  console.log('Redux CRUD backend listening at http://localhost:%s', port);
});
