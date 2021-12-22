"use strict";
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const server = require("./server");

app.use(server);

module.exports.handler = serverless(app);