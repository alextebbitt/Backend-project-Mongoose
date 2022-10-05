const express = require("express");

const app = express();
const PORT = 8787;
const mongoose = require("mongoose")
const { dbConnection } = require("./config/config")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

const cors = require("cors");



app.use(cors());
app.use(express.json())
dbConnection()

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(PORT, console.log(`Sever started on port ${PORT}`));