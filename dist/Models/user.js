"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const postgres_1 = require("../DB/postgres");
const userModel = postgres_1.sequelise.define('User', {
    uid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    f_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    l_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isadmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
});
exports.userModel = userModel;
