const routePrefix = '/api/v1';
const authRoute = require('./auth');
const customerRoute = require('./customer');

function route(app) {
    app.use(`${routePrefix}/auth`, authRoute);
    app.use(`${routePrefix}/customers`, customerRoute);
}

module.exports = route;