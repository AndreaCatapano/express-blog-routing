const express = require("express");
const app = express();
const port = 3001;


const postRouter = require("./routers/post.js");

app.use("/posts", postRouter);


app.listen(port, function (){ console.log("Server On")});
