const User = require("../models/User");
const bcrypt = require("bcryptjs");
const AVATAR_PATH = "https://storage.googleapis.com/routes-bootcamp-avatars/";
require("dotenv").config();


const UserController = {
    async register(req, res, next) {
        try {
            let password;
            if (req.body.password !== undefined) {
                password = await bcrypt.hash(req.body.password, 10);
            } else {
                return res.status(400).send({ message: "You need to put a password" });
            }
            const user = await User.create({
                ...req.body,
                avatar: AVATAR_PATH + "avatar.png",
                password: password,
                role: "user",
            });

            res.status(201).send({
                message: "Thank you for registering.",
                user,
            });
        } catch (error) {
            error.origin = 'user';
            error.suborigin = 'register';
            next(error);
        }
    }
}