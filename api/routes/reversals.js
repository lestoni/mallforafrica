/**
 * Reversal router.
 *
 * @summary
 *  reversal.create()
 *  reversal.update()
 *  reversal.delete()
 *  reversal.fetchOne()
 *  reversal.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('mallforafrica-api:reversal-router');

var reversalController  = require('../controllers/reversal');

var router  = express.Router();


/**
 * @api {post} /reversals Create a reversal
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Reversal
 *
 * @apiDescription Create a new reversal
 *
 * @apiParam {String} transaction referall transaction id
 *
 * @apiParamExample Request Example:
 *  {
 *    "transaction": "55ba919a3ff3eb4065f9ae81"
 *  }
 *
 * @apiSuccess {String} _id reversal's id
 * @apiSuccess {String} transaction transaction's id
 * @apiSuccess {Object} status reversal status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.initialized initialization status
 * @apiSuccess {Date} reversal_initial_date period when reversal started(ISO Formatted)
 * @apiSuccess {Date} reversal_completed_date period when reversal ended(ISO Formatted)
 * @apiSuccess {String} reversal_code unique code for reversal
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "_id": "55ba966dad2ddc19722b6237",
 *    "transaction": "55ba919a3ff3eb4065f9ae81",
 *    "amount" : 4500,
 *    "reversal_initial_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_completed_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 *
 */
router.post('/', reversalController.create);

/**
 * @api {get} /reversals/:id Get Reversal
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Reversal
 *
 * @apiDescription Get a reversal with the given id
 *
 * @apiSuccess {String} _id reversal's id
 * @apiSuccess {String} transaction transaction's id
 * @apiSuccess {Object} status reversal status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.initialized initialization status
 * @apiSuccess {Date} reversal_initial_date period when reversal started(ISO Formatted)
 * @apiSuccess {Date} reversal_completed_date period when reversal ended(ISO Formatted)
 * @apiSuccess {String} reversal_code unique code for reversal
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "_id": "55ba966dad2ddc19722b6237",
 *    "transaction": "55ba919a3ff3eb4065f9ae81",
 *    "amount" : 4500,
 *    "reversal_initial_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_completed_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 */
router.get('/:id', reversalController.fetchOne);

/**
 * @api {put} /reversals/:id Update Reversal
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Reversal
 *
 * @apiDescription Update a reversal with the given id
 *
 * @apiSuccess {String} _id reversal's id
 * @apiSuccess {String} transaction transaction's id
 * @apiSuccess {Object} status reversal status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.initialized initialization status
 * @apiSuccess {Date} reversal_initial_date period when reversal started(ISO Formatted)
 * @apiSuccess {Date} reversal_completed_date period when reversal ended(ISO Formatted)
 * @apiSuccess {String} reversal_code unique code for reversal
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "_id": "55ba966dad2ddc19722b6237",
 *    "transaction": "55ba919a3ff3eb4065f9ae81",
 *    "amount" : 4500,
 *    "reversal_initial_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_completed_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 */
router.put('/:id', reversalController.update);

/**
 * @api {get} /reversals Get reversals collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Reversal
 *
 * @apiDescription Get a collection of reversals
 *
 *
 *
 * @apiSuccess {String} _id reversal's id
 * @apiSuccess {String} transaction transaction's id
 * @apiSuccess {Object} status reversal status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.initialized initialization status
 * @apiSuccess {Date} reversal_initial_date period when reversal started(ISO Formatted)
 * @apiSuccess {Date} reversal_completed_date period when reversal ended(ISO Formatted)
 * @apiSuccess {String} reversal_code unique code for reversal
 *
 * @apiSuccessExample Request Example:
 *  [{
 *    "_id": "55ba966dad2ddc19722b6237",
 *    "transaction": "55ba919a3ff3eb4065f9ae81",
 *    "amount" : 4500,
 *    "reversal_initial_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_completed_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }]
 */
router.get('/', reversalController.fetchAll);

/**
 * @api {delete} /reversals/:id Delete Reversal
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Reversal
 *
 * @apiDescription Delete a reversal with the given id
 *
 *
 * @apiSuccess {String} _id reversal's id
 * @apiSuccess {String} transaction transaction's id
 * @apiSuccess {Object} status reversal status
 * @apiSuccess {Boolean} status.completed completion status
 * @apiSuccess {Boolean} status.pending pending status
 * @apiSuccess {Boolean} status.cancelled cancellation status
 * @apiSuccess {Boolean} status.initialized initialization status
 * @apiSuccess {Date} reversal_initial_date period when reversal started(ISO Formatted)
 * @apiSuccess {Date} reversal_completed_date period when reversal ended(ISO Formatted)
 * @apiSuccess {String} reversal_code unique code for reversal
 *
 * @apiSuccessExample Request Example:
 *  {
 *    "_id": "55ba966dad2ddc19722b6237",
 *    "transaction": "55ba919a3ff3eb4065f9ae81",
 *    "amount" : 4500,
 *    "reversal_initial_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_completed_date": "2015-07-30T21:18:17.261Z",
 *    "reversal_code": "41A15D689715EFCE",
 *    "status": {
 *      "completed": true,
 *      "pending" : false,
 *      "cancelled": false,
 *      "reversed" : false
 *    }
 *  }
 */
router.delete('/:id', reversalController.delete);


// Expose Reversal Router
module.exports = router;

