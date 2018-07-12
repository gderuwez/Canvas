let c = document.getElementById("canvas")
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(10, 542);
ctx.quadraticCurveTo(148, 893, 712, 542);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(260, 45, 30, 505);

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(275, 35, 25, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, 500);
ctx.lineTo(240, 500);
ctx.lineTo(240, 200);
ctx.quadraticCurveTo(220, 350, 0, 500);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(310, 50);
ctx.quadraticCurveTo(400, 400, 310, 500);
ctx.lineTo(660, 500);
ctx.quadraticCurveTo(620, 300, 310, 50);
ctx.fillStyle = "black";
ctx.fill();
