"use strict";
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const user = require("./src/data/users/")

const users = await user.getAllUsers()

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
    info: users
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
