const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req,res) => {   
    try {
        //generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log("Error");
    }
});


//LOGIN

module.exports = router;