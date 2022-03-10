const {body} = require('express-validator');

module.exports = [
    body('username')
        .notEmpty().withMessage('username_is_required'),
    body('password')
        .notEmpty().withMessage('password_is_required')
]