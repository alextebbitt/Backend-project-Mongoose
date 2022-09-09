const express = require("express");
const req = require("express/lib/request");
const app = express();
const PORT = 8787;
const mongoose = require("mongoose")
const { dbConnection } = require("./config/config")
const userRoute = require("./routes/user")




app.use(express.json())
dbConnection()
console.log("hello")

app.use("/api/users", userRoute);


app.listen(PORT, console.log(`Sever started on port ${PORT}`));