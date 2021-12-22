'use strict'
const users = require('../../data/users')

const getUsers = async (req, res, next) => {
    try {
        const Users = await users.getAllUsers();
        if (Users) return res.status(200).send({ Usuarios: Users })

        return res.status(404).send({
            message: 'Não foi possível encontrar usuarios cadastrados',
            info: Users
        })
    } catch (err) {
        return res.status(500).send({
            error: err.message
        })
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const User = await users.getUser(id);
        if (User && User.length > 0) return res.status(200).send({ Usuario: User })
        return res.status(404).send({
            message: 'Não foi possível encontrar o usuario solicitado',
            info: User
        })
    } catch (err) {
        return res.status(500).send({
            error: err.message
        })
    }
}

const cadUser = async (req, res, next) => {
    try {
        const data = req.body
        if (!data) return res.status(400).send({
            message: 'Favor passar todos os dados necessarios para o cadastro do usuario',
            info: 'Nome, Idade, Cargo'
        })

        const User = await users.cadUser(data);
        const id = User.insertId
        const getUser = await users.getUser(id);
        if (User.affectedRows < 1) {
            return res.status(400).send({
                message: 'Não foi possível cadastrar o usuario informado',
                info: User
            })
        } else {
            return res.status(200).send({
                message: 'Usuario cadastrado com sucesso!',
                info: getUser
            })
        }
    } catch (err) {
        return res.status(500).send({
            error: err.message
        })
    }
}

const altUser = async (req, res, next) => {
    try {
        const data = req.body;
        const User = await users.altUser(data);
        const id = data.Id
        const getUser = await users.getUser(id);
        if (User.affectedRows > 0) return res.status(200).send({
            message: 'Usuario alterado com sucesso',
            info: getUser
        })

        return res.status(404).send({ message: 'Não foi possível encontrar usuarios cadastrados, verifique os dados informados' })
    } catch (err) {
        return res.status(500).send({
            error: err.message
        })
    }
}

const delUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const User = await users.delUser(id);
        if (User.affectedRows > 0) return res.status(200).send({ message: 'Usuario deletado com sucesso' })

        return res.status(404).send({ message: 'Não foi possível deletar o usuario informado, verifique os dados informados' })
    } catch (err) {
        return res.status(500).send({
            error: err.message
        })
    }
}

module.exports = {
    getUsers,
    getUser,
    cadUser,
    altUser,
    delUser
}