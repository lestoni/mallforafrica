/**
 * Load Module dependencies.
 */

var env = process.env;

module.exports = {
  // Node environment
  env: env.NODE_ENV || 'development',

  // HTTP Port to bind to
  http_port: env.NODE_PORT || '3000',

  // MongoDB URL
  MONGODB_URL: process.MONGODB_URL_MALL || 'mongodb://localhost:27017/mallforafrica'
};
