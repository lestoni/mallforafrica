/**
 * Load Module Dependencies
 */
var http        = require('http');
var path         = require('path');

var express      = require('express');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var validator  = require('express-validator');
var mongoose   = require('mongoose');
var debug         = require('debug')('mallforafrica-api:server');
var cors        = require('cors');

var routes = require('./routes');
var utils = require('./lib');
var config = require('./config');

var app = express();
var port = utils.normalizePort(config.http_port);
var server;

// connect to mongoDB
mongoose.connect(config.MONGODB_URL);
mongoose.connection.on('error', utils.mongoError);

// Application Settings
app.disable('x-powered-by');
app.set('port', port);

// PRODUCTION Environment settings
if(config.env === 'production'){
  app.enable('trust proxy', 1);
}

if(config.env === 'development') {
  app.use(logger('dev'));
}

//--Setup Middleware--//

// Documentation resource
app.use('/docs', express.static(path.join(__dirname, 'docs')));

// Middleware attachment
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization'
}));
app.use(bodyParser.json());
app.use(validator());

// Init routes
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (config.env === 'development') {
  app.use(function(err, req, res, next) {
    var status = err.status || 500;

    res.status(status).json({
      errors: {
        status: status,
        message: err.message
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  var status = err.status || 500;

  res.status(status).json({
    errors: {
      status: status,
      message: err.message
    }
  });
});


/**
 * Create HTTP server.
 */

server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', utils.onError(port));
server.on('listening', utils.onListening(server));

module.exports = app;
