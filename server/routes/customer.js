const express = require('express');
const router = express.Router();
const customerController = require('../src/controllers/CustomerController');

const verifyToken = require('../src/middlewares/verifyToken');
const validationResult = require('../src/helpers/validatorHelper');
const createValidator = require('../src/validators/customers/createCustomerValid');
const updateValidator = require('../src/validators/customers/updateCustomerValid');
const deleteValidator = require('../src/validators/customers/deleteCustomerValid')

router.use(verifyToken);
router.get('/', customerController.getAllCustomer);
router.post('/', createValidator, validationResult, customerController.createCustomer);
router.put('/:id', updateValidator, validationResult, customerController.updateCustomer);
router.delete('/:id', deleteValidator, validationResult, customerController.deleteCustomer);

module.exports = router;