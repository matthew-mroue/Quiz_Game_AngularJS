"use strict";
const express = require("express")
const app = express();
const questions = require("./questions.routes")
const scores = require("./scores.routes")

app.use(express.static("./public"));
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.listen(4000, () => {
    console.log("Server is running.")
});