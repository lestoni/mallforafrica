/**
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug = require('debug')('mallforafrica-api:customer-controller');

var customerDAL     = require('../models/dal/customer');
var config        = require('../config');

/**
 * Create a customer.
 *
 * @desc create a customer and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createCustomer(req, res, next) {
  debug('create customer');

  // Begin workflow
  var workflow = new EventEmitter();

  // validating customer data
  // cant trust anyone
  workflow.on('validate', function validateCustomer() {

    var errs = req.validationErrors();

    if(errs) {
      return res.status(400).json({
        errors: {
          status: 400,
          message: err.message
        }
      });
    }

    workflow.emit('createCustomer');
  });

  workflow.on('createCustomer', function createCustomer() {
    var body = req.body;

    customerDAL.create(body, function (err, customer) {
      if(err) {
        return res.status(400).json({
          errors: {
            status: 400,
            message: err.message
          }
        });
      }

      res.status(201).json(customer);
    });

  });

  workflow.emit('validate');
};

/**
 * Get a single customer.
 *
 * @desc Fetch a customer with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneCustomer(req, res, next) {
  debug('fetch customer:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  customerDAL.get(query, function cb(err, customer) {
    if(err) {
      return next(err);
    }

    res.json(customer);
  });
};

/**
 * Update a single customer.
 *
 * @desc Fetch a customer with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateCustomer(req, res, next) {
  debug('updating customer:'+ req.params.id);

  var query = {
    _id: req.params.id
  };

  var update = {
    $set: req.body
  };

  customerDAL.update(query, update, function cb(err, customer) {
    if(err) {
      return next(err);
    }

    res.json(customer || {});

  });


};

/**
 * Delete a single customer.
 *
 * @desc Fetch a customer with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteCustomer(req, res, next) {
  debug('deleting customer:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  customerDAL.delete(query, function cb(err, customer) {
    if(err) {
      return next(err);
    }

    res.json(customer || {});
  });
};

/**
 * Get a collection of customers
 *
 * @desc Fetch a collection of customers
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllCustomers(req, res, next) {
  debug('get a collection of customers');

  var query = {};
  var qs = {};

  customerDAL.getCollection(query, qs, function cb(err, customers) {
    if(err) {
      return next(err);
    }

    res.json(customers);
  });
};
