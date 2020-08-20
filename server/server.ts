import express from "express";

//const express = require('express');
const app = express();
const port = 4201;


const entries : any[] = [
  {
    num: 1,
    name: "What good shall I do this day?",
    description: "What good will you do today?",
    text: ""
  },
  {
    num: 2,
    name: "What good have I done this day?",
    description: "What good have you done today?",
    text: ""
  },
  {
    num: 3,
    name: "What's positively affecting my mood?",
    description: "What's positively affecting your mood?",
    text: ""
  },
  {
    num: 4,
    name: "What's negatively affecting my mood?",
    description: "What's negatively affecting your mood?",
    text: ""
  }
];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/entries", (req, res) => {
  res.send(entries);
});

app.post("/export", (req, res) => {
  res.send();
});



app.listen(port, (): any => {
  console.log("hello");
});