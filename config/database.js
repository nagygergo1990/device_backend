const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("device_db", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

module.exports = sequelize;