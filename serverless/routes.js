const serverless = require("serverless-http");
const express = require("express");
const sql = require("mysql")
const app = express();

const host = 'database-1.cvzxqntwwqsu.us-east-1.rds.amazonaws.com'
const user = 'admin'
const pass = ''
const database = ''

const connection = {
  ssl: { rejectUnauthorized: false},
  host,
  user, 
  pass,
  database
}

const knex = knex({
  client: 'mysql',
  connection
})


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
