const express = require("express");
const app = express();
const port = 3001;


app.use(express.static('../public'))

const postRouter = require("./routers/post.js");

app.use("/posts", postRouter);


app.listen(port, function (){ console.log("Server On")});
