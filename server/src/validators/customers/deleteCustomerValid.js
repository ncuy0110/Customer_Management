const {param} = require('express-validator');

module.exports = [
    param('id')
        .notEmpty().withMessage('id_param_is_required')
        .isInt().withMessage('id_is_int')
]