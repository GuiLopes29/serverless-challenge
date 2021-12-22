'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mysql');

const getAllUsers = async () => {
    try {
        let pool = sql.createConnection(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const getUsers = pool.query(sqlQueries.getAllUsers)
        return getUsers.RowDataPacket
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllUsers
}
