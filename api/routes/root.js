/**
 * Root router.
 *
 * @summary
 */

/**
 * Load Module Dependencies.
 */

var express  = require('express');
var debug    = require('debug')('mallforafrica-api:root-router');

var pkg = require('../package.json');

var router  = express.Router();

/**
 * @api {get} / Get API info
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup General
 *
 * @apiSuccess {String} name api version
 * @apiSuccess {String} version api version
 * @apiSuccess {String} description api description
 *
 * @apiDescription Get api quick info
 *
 */
router.get('/', function (req, res, next) {
    res.json({
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      documentation: "http://mallforafrica-dev.c4asolution.com/docs/"
    });
  });

// Expose Root Router
module.exports = router;
