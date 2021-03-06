
const express = require("express");

const PORT = 8080;
const HOST = 'localhost';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});