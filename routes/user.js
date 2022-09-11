const { PASS_SEC } = require("../config/keys");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorize, verifyTokenAndAdmin } = require("./verifyToken");

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
//DELETE
router.delete("/:id" , verifyTokenAndAuthorize, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router