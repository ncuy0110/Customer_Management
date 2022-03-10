const express = require('express');
const router = express.Router();
const registerValidator = require('../src/validators/auth/registerValidator');
const validatorHelper = require('../src/helpers/validatorHelper');
const authController = require('../src/controllers/AuthController');
const loginValidator = require('../src/validators/auth/loginValidator');
const verifyToken = require('../src/middlewares/verifyToken');

router.post('/register', registerValidator, validatorHelper, authController.register);
router.post('/login', loginValidator, validatorHelper, authController.login);
router.use(verifyToken);

module.exports = router;
