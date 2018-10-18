const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const validator = require('express-validator');

function middlewares(app) {
  app.use(cors());
  app.use(logger('dev'));
  app.use(validator());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

module.exports = middlewares;
