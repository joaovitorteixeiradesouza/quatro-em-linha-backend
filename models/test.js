//@ts-check
"use strict";

const { Model, DataTypes } = require('sequelize');
const sequelize = require("./../bin/database")

class Teste extends Model {}

Teste.init({
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'test'
});

module.exports = Teste;