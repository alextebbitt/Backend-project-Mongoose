const express = require("express");
const app = express();
const PORT = 8787;
const { dbConnection } = require("./config/config")

app.use(express.json())
dbConnection()

app.listen(PORT, console.log(`Sever started on port ${PORT}`));