const express = require("express");
const configure = require("./config");
const connectDB = require("../config/db");

const app = express();
//Connect MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(configure.port, () => {
  console.info(`Server is running on port ${configure.port}`);
});
