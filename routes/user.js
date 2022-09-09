const { PASS_SEC } = require("../config/keys");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorize } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );
        res.status(500).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router