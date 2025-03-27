const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");

router.get("/", function(req, res) {
    res.json(posts);
})

router.get("/:id", function(req, res) {
    const id = req.params.id;
    const post = posts.find(post => post.slug === id); 

    if(post){
        res.json(post);
    }
})

router.post("/", function(req, res) {
    res.send("Nuovo Post")
})

router.put("/:id", function(req, res) {
    const id = req.params.id;
    res.send(`Modificato completamente il post ${id}`);
})

router.patch("/:id", function(req, res) {
    const id = req.params.id;
    res.send(`Modifica parziale per il post ${id}`);
})

router.delete("/:id", function(req, res) {
    const id = req.params.id;
    res.send(`Eliminato l'elemento ${id}`);
})


module.exports = router;




