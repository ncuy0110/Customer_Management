const jwt = require('jsonwebtoken');

require('dotenv/config');
const ENV = process.env;

module.exports = function (user) {
    const payload = {
        id: user.id,
        username: user.username,
        name: user.name,
        address: user.address,
        phone: user.phone
    }
    const token = jwt.sign(payload, ENV.JWT_SECRET_KEY);
    return token;
}