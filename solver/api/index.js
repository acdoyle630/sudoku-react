/*jshint esversion: 6*/

const express = require('express');
const Router = express.Router();

Router.use('/solve', require('./solve'));

module.exports = Router;