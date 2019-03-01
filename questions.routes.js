"use strict";
const express = require("express");
const questions = express.Router();
const pool = require("./connection")

questions.get("/questions", function(req, res) {
    pool.query("SELECT * FROM questionlist order by random() limit 5").then(function(response) {
        console.log(response)
        res.send(response.rows)
    });
});

module.exports = questions;