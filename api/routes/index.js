/**
 * Load Module dependencies
 */
var debug = require('debug')('mallforafrica-api:init-routes');

var customersRouter = require('./customers');
var transactionsRouter = require('./transactions');
var reversalsRouter = require('./reversals');
var rootRouter      = require('./root');

module.exports = function initRoutes(app) {
  debug('loading routes');

  app.use('/'               ,rootRouter);
  app.use('/customers',     customersRouter);
  app.use('/transactions',  transactionsRouter);
  app.use('/reversals',     reversalsRouter);


  debug('routes loaded');
};
