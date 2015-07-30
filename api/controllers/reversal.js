/**
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug = require('debug')('mallforafrica-api:reversal-controller');

var reversalDAL     = require('../models/dal/reversal');
var config        = require('../config');

/**
 * Create a reversal.
 *
 * @desc create a reversal and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createReversal(req, res, next) {
  debug('create reversal');

  // Begin workflow
  var workflow = new EventEmitter();

  // validating reversal data
  // cant trust anyone
  workflow.on('validate', function validateReversal() {

    var errs = req.validationErrors();

    if(errs) {
      return res.status(400).json({
        errors: {
          status: 400,
          message: err.message
        }
      });
    }

    workflow.emit('createReversal');
  });

  workflow.on('createReversal', function createReversal() {
    var body = req.body;

    reversalDAL.create(body, function (err, reversal) {
      if(err) {
        return res.status(400).json({
          errors: {
            status: 400,
            message: err.message
          }
        });
      }

      res.status(201).json(reversal);
    });

  });

  workflow.emit('validate');
};

/**
 * Get a single reversal.
 *
 * @desc Fetch a reversal with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneReversal(req, res, next) {
  debug('fetch reversal:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  reversalDAL.get(query, function cb(err, reversal) {
    if(err) {
      return next(err);
    }

    res.json(reversal);
  });
};

/**
 * Update a single reversal.
 *
 * @desc Fetch a reversal with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateReversal(req, res, next) {
  debug('updating reversal:'+ req.params.id);

  var query = {
    _id: req.params.id
  };

  var update = {
    $set: emquery(req.body)
  };

  reversalDAL.update(query, update, function cb(err, reversal) {
    if(err) {
      return next(err);
    }

    res.json(reversal || {});

  });


};

/**
 * Delete a single reversal.
 *
 * @desc Fetch a reversal with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteReversal(req, res, next) {
  debug('deleting reversal:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  reversalDAL.delete(query, function cb(err, reversal) {
    if(err) {
      return next(err);
    }

    res.json(reversal || {});
  });
};

/**
 * Get a collection of reversals
 *
 * @desc Fetch a collection of reversals
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllReversals(req, res, next) {
  debug('get a collection of reversals');

  var query = {};
  var qs = {};

  reversalDAL.getCollection(query, qs, function cb(err, reversals) {
    if(err) {
      return next(err);
    }

    res.json(reversals);
  });
};
