const express = require("express");
const configure = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(configure.port, () => {
  console.info(`Server is running on port ${configure.port}`);
});
