'use strict';
const utils = require('../../utils');
const config = require('../../../config');
const sql = require('mysql2/promise');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection

    const con = await sql.createConnection(config.sql)
    global.connection = con
    return con;
}

const getAllUsers = async () => {
    try {
        const conn = await connect();
        const sqlQueries = await utils.loadSqlQueries('users');
        const [rows] = await conn.query(sqlQueries.getAllUsers)
        return rows
    } catch (error) {
        return error.message;
    }
}

const getUser = async (id) => {
    try {
        const conn = await connect();
        const sqlQueries = await utils.loadSqlQueries('users');
        const [rows] = await conn.query(sqlQueries.getUser, id)
        return rows
    } catch (error) {
        return error.message;
    }
}

const cadUser = async (data) => {
    try {
        const conn = await connect();
        const sqlQueries = await utils.loadSqlQueries('users');
        const [rows] = await conn.query(sqlQueries.cadUser, data)
        return rows
    } catch (error) {
        return error.message;
    }
}

const altUser = async (data) => {
    try {
        const conn = await connect();
        const sqlQueries = await utils.loadSqlQueries('users');
        const [rows] = await conn.query(sqlQueries.altUser, [data, data.Id])
        return rows
    } catch (error) {
        return error.message;
    }
}

const delUser = async (id) => {
    try {
        const conn = await connect();
        const sqlQueries = await utils.loadSqlQueries('users');
        const [rows] = await conn.query(sqlQueries.delUser, id)
        return rows
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllUsers,
    getUser,
    cadUser,
    altUser,
    delUser
}
