const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello world!");
})
server.listen(port);
