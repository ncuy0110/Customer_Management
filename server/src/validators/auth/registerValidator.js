const {body} = require('express-validator');

module.exports = [
    body('username')
        .notEmpty().withMessage('username_is_required')
        .isLength({min: 8, max: 255}).withMessage('username_is_required_with_min_8_characters_and_max_255_characters'),
    body('password')
        .notEmpty().withMessage('password_is_required')
        .isLength({min: 8}).withMessage('password_is_required_with_min_8_characters')
];