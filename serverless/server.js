'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./routes/Routes')
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", ["*"]);
  res.header("Access-Control-Allow-Headers", 
            ["Origin", "X-Requested-With", "Authorization", "Content-Type"]);

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', ['PUT, POST, PATCH, DELETE, GET']);
    return res.status(200).send({});
  }
  app.use(cors());
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(Routes.routes);

module.exports = app