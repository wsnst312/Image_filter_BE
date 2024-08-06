const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();
const env = process.env.NODE_ENV || "development"
const config = require('./config')[env]

const {username, password,database,host,dialect,port} = config;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
});

module.exports = sequelize;