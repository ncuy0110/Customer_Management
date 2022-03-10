const {body} = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('name_is_required'),
    body('address')
        .notEmpty().withMessage('address_is_required'),
    body('gender')
        .notEmpty().withMessage('gender_is_required')
        .isBoolean().withMessage('gender_is_boolean'),
    body('birthday')
        .notEmpty().withMessage('birthday_is_required')
        .isInt().withMessage('birthday_is_int'),
    body('job_title')
        .notEmpty().withMessage('job_title_is_required'),
    body('phone')
        .notEmpty().withMessage('phone_is_required')
];