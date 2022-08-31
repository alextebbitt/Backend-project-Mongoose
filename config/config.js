const mongoose = require("mongoose");

const { MONGO_URI } =  require("./keys");

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully.");
    } catch (error) {
        console.error(error);
        throw new Error("There was an error connecting the database.");
    }
};

module.exports = {
    dbConnection
};