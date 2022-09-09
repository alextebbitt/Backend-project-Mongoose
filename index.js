const express = require("express");
const req = require("express/lib/request");
const app = express();
const PORT = 8787;
const mongoose = require("mongoose")
const { dbConnection } = require("./config/config")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")




app.use(express.json())
dbConnection()
console.log("hello")

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(PORT, console.log(`Sever started on port ${PORT}`));