const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Device = sequelize.define('Device', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    ip: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM('active', 'error', 'inactive'),
        defaultValue: 'inactive',
    },
    location: {
        type: DataTypes.STRING,
    }
});

module.exports = Device;