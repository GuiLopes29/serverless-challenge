'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mysql');

const getAllUsers = async () => {
    try {
        let pool = await sql.createConnection(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const getUsers = await pool.query(sqlQueries.getAllUsers)
        return getUsers.recordset
    } catch (error) {
        return error.message;
    }
}



module.exports = {
    getAllUsers
}
