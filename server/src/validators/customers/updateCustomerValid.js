const createCustomerValid = require('./createCustomerValid');
const deleteCustomerValid = require('./deleteCustomerValid');

module.exports = deleteCustomerValid.concat(createCustomerValid);