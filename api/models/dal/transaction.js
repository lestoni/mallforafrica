// Access Layer for Transaction Data.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('mallforafrica-api:dal-transaction');
var moment  = require('moment');
var _       = require('lodash');

var Transaction      = require('../transaction');
var Customer         = require('../customer');

var population = [{
  path: 'customer',
  select: Customer.whitelist
}];

/**
 * create a new transaction.
 *
 * @desc  creates a new transaction and saves them
 *        in the database
 *
 * @param {Object}  transactionData  Data for the transaction to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(transactionData, cb) {
  debug('creating a new transaction');
  var opts = Transaction.whitelist;

  // Make sure transaction does not exist
  Transaction.findOne({ MPESA_confirmation_number: transactionData.MPESA_confirmation_number },
    function transactionExists(err, isPresent) {
      if(err) {
        return cb(err);
      }

      if(isPresent) {
        exports.get({ _id: isPresent._id }, function (err, transaction) {
          if(err) {
            return cb(err);
          }

          cb(null, transaction);

        });
        return;
      }


      // Create transaction if is new.
      var transactionModel  = new Transaction(transactionData);

      transactionModel.save(function saveTransaction(err, data) {
        if (err) {
          return cb(err);
        }

        exports.get({ _id: data._id }, function (err, transaction) {
          if(err) {
            return cb(err);
          }

          cb(null, transaction);

        });

      });

  });

};

/**
 * delete a transaction
 *
 * @desc  delete data of the transaction with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting transaction: ', query);
  var opts = Transaction.whitelist;

  Transaction
    .findOne(query, opts)
    .populate(population)
    .exec(function deleteTransaction(err, transaction) {
      if (err) {
        return cb(err);
      }

      if(!transaction) {
        return cb(null, {});
      }

      transaction.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, transaction);

      });

    });
};

/**
 * update a transaction
 *
 * @desc  update data of the transaction with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating transaction: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: Transaction.whitelist
  };

  updates.last_modified = now;

  Transaction
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateTransaction(err, transaction) {
      if(err) {
        return cb(err);
      }

      cb(null, transaction || {});
    });
};

/**
 * get a transaction.
 *
 * @desc get a transaction with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting transaction ', query);
  var opts = Transaction.whitelist;

  Transaction
    .findOne(query, opts)
    .populate(population)
    .exec(function(err, transaction) {
      if(err) {
        return cb(err);
      }

      cb(null, transaction || {});
    });
};

/**
 * get a collection of transactions
 *
 * @desc get a collection of transactions from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of transactions');
  var opts = Transaction.whitelist;

  Transaction
    .find(query, opts)
    .populate(population)
    .exec(function(err, transactions) {
      if(err) {
        return cb(err);
      }

      cb(null, transactions);
    });

};
