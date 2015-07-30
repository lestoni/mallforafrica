/**
 * Reversal Model Definition.
 */

/**
 * Load Module Dependencies.
 */
var crypto = require('crypto');

var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var ReversalSchema = new Schema({
  transaction:    { type: Schema.Types.ObjectId, ref: 'Transaction' },
  status: {
    initialized: { type: Boolean, default: false },
    pending: { type: Boolean, default: false },
    cancelled: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
  },
  reversal_initial_date: { type: Date },
  reversal_completed_date: { type: Date },
  reversal_code: { type: String },
  date_created: Date,
  last_modified:Date
});

/**
 * Model attributes to expose
 */
ReversalSchema.statics.whitelist = {
  _id: 1,
  transaction: 1,
  status: 1,
  reversal_initial_date: 1,
  reversal_completed_date: 1,
  reversal_code: 1
};

// add mongoose-paginate middleware to support pagination
ReversalSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * Sets the date_created and last_modified attributes prior to save
 */
ReversalSchema.pre('save', function preSave(next) {
  var model = this;

  // set date modifications
  var now = moment().toISOString();

  model.date_created = now;
  model.last_modified = now;
  model.reversal_initial_date = now;
  model.reversal_code = crypto.randomBytes(8).toString('hex').toUpperCase();

  next();
});

// Expose the Reversal Model
module.exports = mongoose.model('Reversal', ReversalSchema);
