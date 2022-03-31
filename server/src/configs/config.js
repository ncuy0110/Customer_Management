require('dotenv/config');

const ENV = process.env;

class Config {
    JWT_SECRET_KEY = ENV.JWT_SECRET_KEY;
    PORT = ENV.PORT;
    DB_HOST = ENV.DB_HOST;
    DB_PORT = ENV.DB_PORT;
    DB_NAME = ENV.DB_NAME;
    DB_USERNAME = ENV.DB_USERNAME;
    DB_PASSWORD = ENV.DB_PASSWORD;
}

module.exports = new Config();