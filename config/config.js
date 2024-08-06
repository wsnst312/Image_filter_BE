const { config } = require('dotenv');
config();

const {DB_HOST, DB_USER,DB_NAME,DB_PASSWORD,DB_PORT, DB_DIALECT} = process.env;

const dbConfig = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT
    },
    test: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT
    },
};

module.exports = dbConfig;
