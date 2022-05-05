"use strict"
//Model passa a estrutura dos dados da tabela do banco do dados
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Clients extends Model{}

    Clients.init({//Define os campos da tabela
        nome: DataTypes.STRING(50),
        cpf: DataTypes.BIGINT,
        endereco: DataTypes.STRING(60),
        altura: DataTypes.DECIMAL(3,2),
        peso: DataTypes.DECIMAL(6,3),
        telefone: DataTypes.STRING(11),
        data_nascimento: DataTypes.DATE
    },
    {   sequelize,
        modelName: "clients",//nome da tabela no banco de dados
        timestamps: false//oculta os campos createdat e updateat
    });

    return Clients
}
