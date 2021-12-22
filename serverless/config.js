'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { SQL_USER, SQL_PASS, SQL_DATABASE, SQL_HOST } = process.env;

assert(SQL_USER, 'SQL_USER is require');
assert(SQL_PASS, 'SQL_PASS is required');

module.exports = {
    sql:{
        host: SQL_HOST,
        user: SQL_USER,
        password: SQL_PASS,
        database: SQL_DATABASE
    }
};