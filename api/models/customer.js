/**
 * Customer Model Definition.
 */

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  first_name:   { type: String },
  last_name:    { type: String },
  phone_number: { type: String },
  email:        { type: String },
  date_created: Date,
  last_modified:Date
});

/**
 * Model attributes to expose
 */
CustomerSchema.statics.whitelist = {
  _id: 1,
  first_name: 1,
  last_name: 1,
  phone_number: 1,
  email: 1
};

// add mongoose-troop middleware to support pagination
CustomerSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * Sets the date_created and last_modified attributes prior to save
 */
CustomerSchema.pre('save', function preSave(next) {
  var model = this;

  // set date modifications
  var now = moment().toISOString();

  model.date_created = now;
  model.last_modified = now;


  next();
});

// Expose the Customer Model
module.exports = mongoose.model('Customer', CustomerSchema);
