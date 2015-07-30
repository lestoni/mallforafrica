/**
 * Transaction router.
 *
 * @summary
 *  transaction.create()
 *  transaction.update()
 *  transaction.delete()
 *  transaction.fetchOne()
 *  transaction.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('mallforafrica-api:transaction-router');

var transactionController  = require('../controllers/transaction');

var router  = express.Router();


/**
 * @api {post} /transactions Create a transaction
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Transaction
 *
 * @apiDescription Create a new transaction
 *
 * @apiParam {String} customer customer's id
 * @apiParam {String} MPESA_confirmation_number mpesa confirmation number
 * @apiParam {Number} amount transaction's amount
 * @apiParam {Date} transaction_date_time period when transaction occured(ISO Formatted)
 *
 * @apiParamExample Request Example:
 *  {
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z"
 *  }
 *
 * @apiSuccess {String} _id transaction's id
 * @apiSuccess {String} customer customer's id
 * @apiSuccess {String} MPESA_confirmation_number mpesa confirmation number
 * @apiSuccess {Number} amount transaction's amount
 * @apiSuccess {Object} status transaction status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.reversed reversal status
 * @apiSuccess {Date} transaction_date_time period when transaction occured(ISO Formatted)
 * @apiSuccess {String} transaction_code unique code for transaction
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z",
 *    "transaction_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 *
 */
router.post('/', transactionController.create);

/**
 * @api {get} /transactions/:id Get Transaction
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Transaction
 *
 * @apiDescription Get a transaction with the given id
 *
 * @apiSuccess {String} _id transaction's id
 * @apiSuccess {String} customer customer's id
 * @apiSuccess {String} MPESA_confirmation_number mpesa confirmation number
 * @apiSuccess {Number} amount transaction's amount
 * @apiSuccess {Object} status transaction status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.reversed reversal status
 * @apiSuccess {Date} transaction_date_time period when transaction occured(ISO Formatted)
 * @apiSuccess {String} transaction_code unique code for transaction
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z",
 *    "transaction_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 */
router.get('/:id', transactionController.fetchOne);

/**
 * @api {put} /transactions/:id Update Transaction
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Transaction
 *
 * @apiDescription Update a transaction with the given id
 *
 * @apiSuccess {String} _id transaction's id
 * @apiSuccess {String} customer customer's id
 * @apiSuccess {String} MPESA_confirmation_number mpesa confirmation number
 * @apiSuccess {Number} amount transaction's amount
 * @apiSuccess {Object} status transaction status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.reversed reversal status
 * @apiSuccess {Date} transaction_date_time period when transaction occured(ISO Formatted)
 * @apiSuccess {String} transaction_code unique code for transaction
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z",
 *    "transaction_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 */
router.put('/:id', transactionController.update);

/**
 * @api {get} /transactions Get transactions collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Transaction
 *
 * @apiDescription Get a collection of transactions
 *
 *
 * @apiSuccess {String} _id transaction's id
 * @apiSuccess {String} customer customer's id
 * @apiSuccess {String} MPESA_confirmation_number mpesa confirmation number
 * @apiSuccess {Number} amount transaction's amount
 * @apiSuccess {Object} status transaction status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.reversed reversal status
 * @apiSuccess {Date} transaction_date_time period when transaction occured(ISO Formatted)
 * @apiSuccess {String} transaction_code unique code for transaction
 *
 * @apiSuccessExample Request Example:
 *  [{
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z",
 *    "transaction_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }]
 *
 */
router.get('/', transactionController.fetchAll);

/**
 * @api {delete} /transactions/:id Delete Transaction
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Transaction
 *
 * @apiDescription Delete a transaction with the given id
 *
 * @apiSuccess {String} _id transaction's id
 * @apiSuccess {String} customer customer's id
 * @apiSuccess {String} MPESA_confirmation_number mpesa confirmation number
 * @apiSuccess {Number} amount transaction's amount
 * @apiSuccess {Object} status transaction status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.reversed reversal status
 * @apiSuccess {Date} transaction_date_time period when transaction occured(ISO Formatted)
 * @apiSuccess {String} transaction_code unique code for transaction
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "customer": "55ba919a3ff3eb4065f9ae81",
 *    "MPESA_confirmation_number" : "276189A",
 *    "amount" : 4500,
 *    "transaction_date_time": "2015-07-30T21:18:17.261Z",
 *    "transaction_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *
 */
router.delete('/:id', transactionController.delete);


// Expose Transaction Router
module.exports = router;
