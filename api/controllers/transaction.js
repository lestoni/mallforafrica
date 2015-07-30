/**
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug = require('debug')('mallforafrica-api:transaction-controller');

var transactionDAL     = require('../models/dal/transaction');
var config        = require('../config');

/**
 * Create a transaction.
 *
 * @desc create a transaction and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createTransaction(req, res, next) {
  debug('create transaction');

  // Begin workflow
  var workflow = new EventEmitter();

  // validating transaction data
  // cant trust anyone
  workflow.on('validate', function validateTransaction() {

    var errs = req.validationErrors();

    if(errs) {
      return res.status(400).json({
        errors: {
          status: 400,
          message: err.message
        }
      });
    }

    workflow.emit('createTransaction');
  });

  workflow.on('createTransaction', function createTransaction() {
    var body = req.body;

    transactionDAL.create(body, function (err, transaction) {
      if(err) {
        return res.status(400).json({
          errors: {
            status: 400,
            message: err.message
          }
        });
      }

      res.status(201).json(transaction);
    });

  });

  workflow.emit('validate');
};

/**
 * Get a single transaction.
 *
 * @desc Fetch a transaction with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneTransaction(req, res, next) {
  debug('fetch transaction:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  transactionDAL.get(query, function cb(err, transaction) {
    if(err) {
      return next(err);
    }

    res.json(transaction);
  });
};

/**
 * Update a single transaction.
 *
 * @desc Fetch a transaction with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateTransaction(req, res, next) {
  debug('updating transaction:'+ req.params.id);

  var query = {
    _id: req.params.id
  };

  var update = {
    $set: emquery(req.body)
  };

  transactionDAL.update(query, update, function cb(err, transaction) {
    if(err) {
      return next(err);
    }

    res.json(transaction || {});

  });


};

/**
 * Delete a single transaction.
 *
 * @desc Fetch a transaction with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteTransaction(req, res, next) {
  debug('deleting transaction:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  transactionDAL.delete(query, function cb(err, transaction) {
    if(err) {
      return next(err);
    }

    res.json(transaction || {});
  });
};

/**
 * Get a collection of transactions
 *
 * @desc Fetch a collection of transactions
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllTransactions(req, res, next) {
  debug('get a collection of transactions');

  var query = {};
  var qs = {};

  transactionDAL.getCollection(query, qs, function cb(err, transactions) {
    if(err) {
      return next(err);
    }

    res.json(transactions);
  });
};
