const serverless = require("serverless-http");
const express = require("express");
const sql = require("mysql")
const app = express();
const config = require('./config')

let pool = sql.createConnection(config.sql)
console.log(pool)
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
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

module.exports.routes = serverless(app);
