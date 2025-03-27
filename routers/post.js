const express = require("express");
const router = express.Router();
//const posts = require("./data/posts.js");



router.get("/", function(req, res) {
    res.send("Lista delle pizze")
})


module.exports = router;




