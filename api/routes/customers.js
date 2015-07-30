/**
 * Customer router.
 *
 * @summary
 *  customer.create()
 *  customer.update()
 *  customer.delete()
 *  customer.fetchOne()
 *  customer.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('mallforafrica-api:customer-router');

var customerController  = require('../controllers/customer');

var router  = express.Router();

/**
 * @api {post} /customers Create a customer
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Customer
 *
 * @apiDescription Create a new customer
 *
 * @apiParam {String} first_name customer's first name
 * @apiParam {String} last_name customer's last name
 * @apiParam {String} phone_number customer's phone number
 * @apiParam {String} email customer's email
 *
 * @apiParamExample Request Example:
 *  {
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }
 *
 * @apiSuccess {String} _id customer id
 * @apiSuccess {String} first_name customer's first name
 * @apiSuccess {String} last_name customer's last name
 * @apiSuccess {String} phone_number customer's phone number
 * @apiSuccess {String} email customer's email
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }
 *
 */
router.post('/', customerController.create);

/**
 * @api {get} /customers/:id Get Customer
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Customer
 *
 * @apiDescription Get a customer with the given id
 *
 * @apiSuccess {String} _id customer id
 * @apiSuccess {String} first_name customer's first name
 * @apiSuccess {String} last_name customer's last name
 * @apiSuccess {String} phone_number customer's phone number
 * @apiSuccess {String} email customer's email
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }
 *
 */
router.get('/:id', customerController.fetchOne);

/**
 * @api {put} /customers/:id Update Customer
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Customer
 *
 * @apiDescription Update a customer with the given id
 *
 * @apiSuccess {String} _id customer id
 * @apiSuccess {String} first_name customer's first name
 * @apiSuccess {String} last_name customer's last name
 * @apiSuccess {String} phone_number customer's phone number
 * @apiSuccess {String} email customer's email
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }
 */
router.put('/:id', customerController.update);

/**
 * @api {get} /customers Get customers collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Customer
 *
 * @apiDescription Get a collection of customers
 *
 * @apiSuccess {String} _id customer id
 * @apiSuccess {String} first_name customer's first name
 * @apiSuccess {String} last_name customer's last name
 * @apiSuccess {String} phone_number customer's phone number
 * @apiSuccess {String} email customer's email
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60",
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }]
 *
 *
 */
router.get('/', customerController.fetchAll);

/**
 * @api {delete} /customers/:id Delete Customer
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Customer
 *
 * @apiDescription Delete a customer with the given id
 *
 * @apiSuccess {String} _id customer id
 * @apiSuccess {String} first_name customer's first name
 * @apiSuccess {String} last_name customer's last name
 * @apiSuccess {String} phone_number customer's phone number
 * @apiSuccess {String} email customer's email
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "first_name": "John",
 *    "last_name": "Smith",
 *    "phone_number": "0711223344",
 *    "email" : "john_smith@email.com"
 *  }
 *
 *
 */
router.delete('/:id', customerController.delete);


// Expose Customer Router
module.exports = router;
