'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASS, SQL_DATABASE, SQL_HOST } = process.env;

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is require');
assert(SQL_USER, 'SQL_USER is require');
assert(SQL_PASS, 'SQL_PASS is required');

module.exports = {
    port: PORT, 
    host: HOST,
    url: HOST_URL,
    sql:{
        host: SQL_HOST,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASS
    }
};