const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router
    .route('/')
    .get(customerController.getCustomer)
    .post(customerController.postCustomer);

router
    .route('/:id')
    .get(customerController.getCustomerById)
    .put(customerController.updateCustomerById)
    .delete(customerController.deleteCustomer);

module.exports = router;