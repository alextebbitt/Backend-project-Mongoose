const express = require("express");
const req = require("express/lib/request");
const app = express();
const PORT = 8787;
const mongoose = require("mongoose")
const { dbConnection } = require("./config/config")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")




app.use(express.json())
dbConnection()

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(PORT, console.log(`Sever started on port ${PORT}`));