// Access Layer for Reversal Data.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('mallforafrica-api:dal-reversal');
var moment  = require('moment');
var _       = require('lodash');

var Reversal      = require('../reversal');
var Transaction   = require('../transaction');

var population = [{
  path: 'transaction',
  select: Transaction.whitelist
}];

/**
 * create a new reversal.
 *
 * @desc  creates a new reversal and saves them
 *        in the database
 *
 * @param {Object}  reversalData  Data for the reversal to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(reversalData, cb) {
  debug('creating a new reversal');
  var opts = Reversal.whitelist;

  // Create reversal if is new.
  var reversalModel  = new Reversal(reversalData);

  reversalModel.save(function saveReversal(err, data) {
    if (err) {
      return cb(err);
    }

    exports.get({ _id: data._id }, function (err, reversal) {
      if(err) {
        return cb(err);
      }

      cb(null, reversal);

    });

  });

};

/**
 * delete a reversal
 *
 * @desc  delete data of the reversal with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting reversal: ', query);
  var opts = Reversal.whitelist;

  Reversal
    .findOne(query, opts)
    .populate(population)
    .exec(function deleteReversal(err, reversal) {
      if (err) {
        return cb(err);
      }

      if(!reversal) {
        return cb(null, {});
      }

      reversal.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, reversal);

      });

    });
};

/**
 * update a reversal
 *
 * @desc  update data of the reversal with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating reversal: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: Reversal.whitelist
  };

  updates.last_modified = now;

  Reversal
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateReversal(err, reversal) {
      if(err) {
        return cb(err);
      }

      cb(null, reversal || {});
    });
};

/**
 * get a reversal.
 *
 * @desc get a reversal with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting reversal ', query);
  var opts = Reversal.whitelist;

  Reversal
    .findOne(query, opts)
    .populate(population)
    .exec(function(err, reversal) {
      if(err) {
        return cb(err);
      }

      cb(null, reversal || {});
    });
};

/**
 * get a collection of reversals
 *
 * @desc get a collection of reversals from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of reversals');

  var opts = Reversal.whitelist;

  Reversal
    .find(query, opts)
    .populate(population)
    .exec(function(err, reversals) {
      if(err) {
        return cb(err);
      }

      cb(null, reversals);
    });

};
