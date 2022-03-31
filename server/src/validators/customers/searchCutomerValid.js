const {body} = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('name_is_required')
]