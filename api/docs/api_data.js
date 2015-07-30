define({ "api": [
  {
    "type": "post",
    "url": "/customers",
    "title": "Create a customer",
    "version": "1.0.0",
    "name": "Create",
    "group": "Customer",
    "description": "<p>Create a new customer</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>customer id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/customers/:id",
    "title": "Delete Customer",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Customer",
    "description": "<p>Delete a customer with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>customer id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customers",
    "title": "Get customers collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Customer",
    "description": "<p>Get a collection of customers</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>customer id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customers/:id",
    "title": "Get Customer",
    "version": "1.0.0",
    "name": "Get",
    "group": "Customer",
    "description": "<p>Get a customer with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>customer id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/customers/:id",
    "title": "Update Customer",
    "version": "1.0.0",
    "name": "Update",
    "group": "Customer",
    "description": "<p>Update a customer with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>customer id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>customer's first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>customer's last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer's phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>customer's email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Smith\",\n  \"phone_number\": \"0711223344\",\n  \"email\" : \"john_smith@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get API info",
    "version": "1.0.0",
    "name": "Get",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>api version</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>api version</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>api description</p> "
          }
        ]
      }
    },
    "description": "<p>Get api quick info</p> ",
    "filename": "routes/root.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/reversals",
    "title": "Create a reversal",
    "version": "1.0.0",
    "name": "Create",
    "group": "Reversal",
    "description": "<p>Create a new reversal</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>referall transaction id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>reversal's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.initialized",
            "description": "<p>initialization status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_initial_date",
            "description": "<p>period when reversal started(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_completed_date",
            "description": "<p>period when reversal ended(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reversal_code",
            "description": "<p>unique code for reversal</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"55ba966dad2ddc19722b6237\",\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\",\n  \"amount\" : 4500,\n  \"reversal_initial_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_completed_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reversals.js",
    "groupTitle": "Reversal"
  },
  {
    "type": "delete",
    "url": "/reversals/:id",
    "title": "Delete Reversal",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Reversal",
    "description": "<p>Delete a reversal with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>reversal's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.initialized",
            "description": "<p>initialization status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_initial_date",
            "description": "<p>period when reversal started(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_completed_date",
            "description": "<p>period when reversal ended(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reversal_code",
            "description": "<p>unique code for reversal</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"55ba966dad2ddc19722b6237\",\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\",\n  \"amount\" : 4500,\n  \"reversal_initial_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_completed_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reversals.js",
    "groupTitle": "Reversal"
  },
  {
    "type": "get",
    "url": "/reversals",
    "title": "Get reversals collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Reversal",
    "description": "<p>Get a collection of reversals</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>reversal's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.initialized",
            "description": "<p>initialization status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_initial_date",
            "description": "<p>period when reversal started(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_completed_date",
            "description": "<p>period when reversal ended(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reversal_code",
            "description": "<p>unique code for reversal</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "[{\n  \"_id\": \"55ba966dad2ddc19722b6237\",\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\",\n  \"amount\" : 4500,\n  \"reversal_initial_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_completed_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reversals.js",
    "groupTitle": "Reversal"
  },
  {
    "type": "get",
    "url": "/reversals/:id",
    "title": "Get Reversal",
    "version": "1.0.0",
    "name": "Get",
    "group": "Reversal",
    "description": "<p>Get a reversal with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>reversal's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.initialized",
            "description": "<p>initialization status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_initial_date",
            "description": "<p>period when reversal started(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_completed_date",
            "description": "<p>period when reversal ended(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reversal_code",
            "description": "<p>unique code for reversal</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"55ba966dad2ddc19722b6237\",\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\",\n  \"amount\" : 4500,\n  \"reversal_initial_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_completed_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reversals.js",
    "groupTitle": "Reversal"
  },
  {
    "type": "put",
    "url": "/reversals/:id",
    "title": "Update Reversal",
    "version": "1.0.0",
    "name": "Update",
    "group": "Reversal",
    "description": "<p>Update a reversal with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>reversal's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.initialized",
            "description": "<p>initialization status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_initial_date",
            "description": "<p>period when reversal started(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "reversal_completed_date",
            "description": "<p>period when reversal ended(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reversal_code",
            "description": "<p>unique code for reversal</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"55ba966dad2ddc19722b6237\",\n  \"transaction\": \"55ba919a3ff3eb4065f9ae81\",\n  \"amount\" : 4500,\n  \"reversal_initial_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_completed_date\": \"2015-07-30T21:18:17.261Z\",\n  \"reversal_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reversals.js",
    "groupTitle": "Reversal"
  },
  {
    "type": "post",
    "url": "/transactions",
    "title": "Create a transaction",
    "version": "1.0.0",
    "name": "Create",
    "group": "Transaction",
    "description": "<p>Create a new transaction</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>transaction status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.reversed",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>unique code for transaction</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\",\n  \"transaction_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "delete",
    "url": "/transactions/:id",
    "title": "Delete Transaction",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Transaction",
    "description": "<p>Delete a transaction with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>transaction status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.reversed",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>unique code for transaction</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\",\n  \"transaction_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/transactions",
    "title": "Get transactions collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Transaction",
    "description": "<p>Get a collection of transactions</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>transaction status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.reversed",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>unique code for transaction</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "[{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\",\n  \"transaction_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/transactions/:id",
    "title": "Get Transaction",
    "version": "1.0.0",
    "name": "Get",
    "group": "Transaction",
    "description": "<p>Get a transaction with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>transaction status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.reversed",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>unique code for transaction</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\",\n  \"transaction_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "put",
    "url": "/transactions/:id",
    "title": "Update Transaction",
    "version": "1.0.0",
    "name": "Update",
    "group": "Transaction",
    "description": "<p>Update a transaction with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>transaction's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer",
            "description": "<p>customer's id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "MPESA_confirmation_number",
            "description": "<p>mpesa confirmation number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>transaction's amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>transaction status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.completed",
            "description": "<p>completion status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.pending",
            "description": "<p>pending status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.cancelled",
            "description": "<p>cancellation status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status.reversed",
            "description": "<p>reversal status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "transaction_date_time",
            "description": "<p>period when transaction occured(ISO Formatted)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>unique code for transaction</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"customer\": \"55ba919a3ff3eb4065f9ae81\",\n  \"MPESA_confirmation_number\" : \"276189A\",\n  \"amount\" : 4500,\n  \"transaction_date_time\": \"2015-07-30T21:18:17.261Z\",\n  \"transaction_code\": \"41A15D689715EFCE\",\n  \"status\": {\n    \"completed\": true,\n    \"pending\" : false,\n    \"cancelled\": false,\n    \"reversed\" : false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  }
] });