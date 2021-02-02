//const { Socket } = require("socket.io");

const socket = io();

socket.emit("join-room", USERID, ROOMID);
socket.on("new-member", userId => {
    console.log(userId);
})

console.log("Testing");

window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    console.log("Hello")

    ctx.strokeStyle = "red"
    ctx.strokeRect(50, 50, 200, 200);
    ctx.strokeRect(50, 50, 200, 200);

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(200,100);
    ctx.stroke();

    //Resizing 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables
    let painting = false;


    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        //console.log(e.clientX, e.clientY);



        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //Event Listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

})