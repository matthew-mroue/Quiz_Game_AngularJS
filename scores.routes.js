"use strict";
const express = require("express");
const scores = express.Router();
const pool = require("./connection");

scores.get("/scores", function(req, res) {
    pool.query("SELECT * FROM scores").then(function(response) {
        console.log(response)
        res.send(response.rows)
    });
});
scores.post("/scores", function(req, res) {
    pool.query("INSERT INTO scores (player_name, score) VALUES ($1::text, $2::text)", 
    [req.body.player_name, req.body.score]).then(function() {
        pool.query("SELECT * FROM scores").then(function(response) {
            res.send(response.rows)
        });
    });
});

module.exports = scores;
