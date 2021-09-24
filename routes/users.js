const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("Welcome to users page");
})

module.exports = router;