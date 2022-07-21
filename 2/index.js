const fs = require("fs");
const { json, form } = require("express");
const express = require("express");
const { urlencoded } = require("body-parser");
let count = 0;

const app = express();
app.use(urlencoded());

app.post("/submit", (req, res) => {
  const name = req.body.name;
  console.log(`${name} submitted their name!`);
  fs.appendFileSync("./names.txt", `${name},\r\n`);

  const blob = fs.readFileSync("./success.html");

  res.status(200);
  res.send(blob.toString());
  res.end();
});

app.get("/", (req, res) => {
  const blob = fs.readFileSync("./index.html");

  res.status(200);
  res.send(blob.toString());
  res.end();
});

app.listen(80, "0.0.0.0", () => {
  console.log("listening on 80");
});
