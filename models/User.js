const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        id: Number,
        name: {
            type: String,
            required: [true, 'Introduce your name']
        },
        email: {
            type: String,
            required: [true, 'Introduce your email'],
            unique: true,
            match: [/.+\@.+\..+/, "Please, introduce a valid email"],
        },
        password: {
            type: String,
            required: [true, 'Introduce your password']
        },
        avatar: { type: String },
        bio: { type: String },
        isAdmin: {type: Boolean, default: false, },
        tokens: [],
        // wishlist: [{ type: ObjectId, ref: 'Route' }]
    }, { timestamps: true });

    module.exports = mongoose.model("User", UserSchema)

