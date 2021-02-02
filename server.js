const { ESRCH } = require("constants");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require('uuid');
//const { v4: uuid } = require("uuid");

const port = 3000;

app.set("view-engine", "ejs");
app.use("/room/:id", express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get('/room', (req, res) => {
    res.redirect(`/room/${uuidv4()}`);
});

app.get("/room/:id", (req, res) => {
    res.render("room.ejs", {roomId: req.params.id, userId: uuidv4()});
});

io.on("connection", socket => {
    socket.on("join-room", (userId, roomId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("new-member", userId);
    })
    console.log("User Joined")
})


server.listen(port);
