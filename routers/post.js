const express = require("express");
const router = express.Router();
//const posts = require("./data/posts.js");



router.get("/", function(req, res) {
    res.send("Lista dei post")
})


router.get("/:id", function(req, res) {
    const id = req.params.id;
    res.send(`Post scelto ${id}`);
})

router.post("/", function(req, res) {
    res.send("Nuovo Post")
})


module.exports = router;




