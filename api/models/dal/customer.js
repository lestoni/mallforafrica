// Access Layer for Customer Data.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('mallforafrica-api:dal-customer');
var moment  = require('moment');
var _       = require('lodash');

var Customer      = require('../customer');

/**
 * create a new customer.
 *
 * @desc  creates a new customer and saves them
 *        in the database
 *
 * @param {Object}  customerData  Data for the customer to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(customerData, cb) {
  debug('creating a new customer');
  var opts = Customer.whitelist;

  // Make sure customer does not exist
  Customer.findOne({ phone_number: customerData.phone_number }, function customerExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, customer) {
        if(err) {
          return cb(err);
        }

        cb(null, customer);

      });
      return;
    }


    // Create customer if is new.
    var customerModel  = new Customer(customerData);

    customerModel.save(function saveCustomer(err, data) {
      if (err) {
        return cb(err);
      }

      exports.get({ _id: data._id }, function (err, customer) {
        if(err) {
          return cb(err);
        }

        cb(null, customer);

      });

    });

  });

};

/**
 * delete a customer
 *
 * @desc  delete data of the customer with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting customer: ', query);
  var opts = Customer.whitelist;

  Customer
    .findOne(query, opts)
    .exec(function deleteCustomer(err, customer) {
      if (err) {
        return cb(err);
      }

      if(!customer) {
        return cb(null, {});
      }

      customer.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, customer);

      });

    });
};

/**
 * update a customer
 *
 * @desc  update data of the customer with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating customer: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: Customer.whitelist
  };

  updates.last_modified = now;

  Customer
    .findOneAndUpdate(query, updates, opts)
    .exec(function updateCustomer(err, customer) {
      if(err) {
        return cb(err);
      }

      cb(null, customer || {});
    });
};

/**
 * get a customer.
 *
 * @desc get a customer with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting customer ', query);
  var opts = Customer.whitelist;

  Customer
    .findOne(query, opts)
    .exec(function(err, customer) {
      if(err) {
        return cb(err);
      }

      cb(null, customer || {});
    });
};

/**
 * get a collection of customers
 *
 * @desc get a collection of customers from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of customers');
  var opts = Customer.whitelist;

  Customer
    .find(query, opts)
    .exec(function (err, customers) {
      if(err) {
        return cb(err);
      }

      cb(null, customers);
    });

};
