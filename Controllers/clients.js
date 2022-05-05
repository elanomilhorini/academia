const { Sequelize } = require("sequelize");
const sequelize = require("../db/db")
const Clients = require("../Models/clients")

module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("academia", "root", "elano123", {//o comando que faz configuração da conexão utilizando o sequelize
            host: "localhost",
            dialect: "mysql"
        });
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll()
        //SELECT * FROM produtos
        res.status(200).send(clients)

    },
    async create(req, res){
        const sequelize = new Sequelize
        ("academia", "root", "elano123", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            endereco: req.body.endereco,
            altura: req.body.altura,
            peso: req.body.peso,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento
        })
        res.status(200).send({
            message: "Cliente cadastrado com sucesso"
        })
    },

async update(req, res){
    const sequelize = new Sequelize ("academia", "root", "elano123", {
        host: "localhost",
        dialect: "mysql"
    });
    await Clients(sequelize, Sequelize.DataTypes).update
    (
    {
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        altura: req.body.altura,
        peso: req.body.peso,
        telefone: req.body.telefone,
        data_nascimento: req.body.data_nascimento
        }, 
        {
        where: {id: req.params.id}
        }
    );
    res.status(200).send("Cliente atualizado com sucesso")
    },


async delete(req, res){
    const sequelize = new Sequelize
    ("academia", "root", "elano123", {
        host: "localhost",
        dialect: "mysql"
    });
 
    await Clients(sequelize, Sequelize.DataTypes).destroy
    (
        {
        where: {id: req.params.id}
        }
    );
    res.status(200).send("Cliente excluido com sucesso")
}
}