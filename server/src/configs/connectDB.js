const {Sequelize} = require('sequelize');
require('dotenv/config');
const ENV = process.env;

const DB_HOST = ENV.DB_HOST;
const DB_NAME = ENV.DB_NAME;
// const DB_PORT = ENV.DB_PORT;
const DB_USERNAME = ENV.DB_USERNAME;
const DB_PASSWORD = ENV.DB_PASSWORD;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/tmp/mysql.sock'
    }
})

module.exports = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connect database successfully!')
        return sequelize;
    } catch (error) {
        console.log('Connect database failure:', error);
    }
}