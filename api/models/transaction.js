/**
 * Transaction Model Definition.
 */

/**
 * Load Module Dependencies.
 */
var crypto = require('crypto');

var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  customer:    { type: Schema.Types.ObjectId, ref: 'Customer' },
  MPESA_confirmation_number: { type: String },
  transaction_code: { type: String },
  status: {
    completed: { type: Boolean, default: false },
    pending: { type: Boolean, default: false },
    cancelled: { type: Boolean, default: false },
    reversed: { type: Boolean, default: false },
  },
  amount:     { type: Number },
  transaction_date_time: { type: Date },
  date_created: Date,
  last_modified:Date
});

/**
 * Model attributes to expose
 */
TransactionSchema.statics.whitelist = {
  _id: 1,
  customer: 1,
  MPESA_confirmation_number: 1,
  status: 1,
  amount: 1,
  transaction_date_time: 1,
  transaction_code: 1
};

// add mongoose-paginate middleware to support pagination
TransactionSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * Sets the date_created and last_modified attributes prior to save
 */
TransactionSchema.pre('save', function preSave(next) {
  var model = this;

  // set date modifications
  var now = moment().toISOString();

  model.date_created = now;
  model.last_modified = now;
  model.transaction_date_time = now;
  model.transaction_code = crypto.randomBytes(8).toString('hex').toUpperCase();

  next();
});

// Expose the Transaction Model
module.exports = mongoose.model('Transaction', TransactionSchema);
