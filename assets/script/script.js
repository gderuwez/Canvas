let c = document.getElementById("canvas")
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#012169";
ctx.fillRect(100, 100, 360, 180);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(100, 100);
ctx.lineTo(136, 100);
ctx.lineTo(460, 259);
ctx.lineTo(460, 280);
ctx.lineTo(418, 280);
ctx.lineTo(100, 121);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(460, 100);
ctx.lineTo(418, 100);
ctx.lineTo(100, 259);
ctx.lineTo(100, 280);
ctx.lineTo(136, 280);
ctx.lineTo(460, 121);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(460, 100);
ctx.lineTo(436, 100);
ctx.lineTo(310, 160);
ctx.lineTo(334, 160);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(460, 280);
ctx.lineTo(340, 220);
ctx.lineTo(360, 220);
ctx.lineTo(460, 268);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(100, 100);
ctx.lineTo(220, 160);
ctx.lineTo(196, 160);
ctx.lineTo(100, 112);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(100, 280);
ctx.lineTo(220, 220);
ctx.lineTo(244, 220);
ctx.lineTo(124, 280);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(100, 160, 360, 60);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(250, 100, 60, 180);

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.fillRect(262, 100, 36, 180);

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.fillRect(100, 172, 360, 36);
