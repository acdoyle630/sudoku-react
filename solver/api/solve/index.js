/*jshint esversion: 6*/

const express = require('express');
const solve = express.Router();
const { sudokoSolve, rotateMatrix, compareArrays, moreLogic } = require('../../engine');

solve.post('/', (req, res) =>{
  sudokoSolve(req.body);
});

module.exports = solve;