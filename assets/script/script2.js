let d = document.getElementById("canvas2")
let dtx = d.getContext("2d");

dtx.beginPath();
dtx.moveTo(10, 542);
dtx.quadraticCurveTo(148, 893, 712, 542);
dtx.fillStyle = "black";
dtx.fill();

dtx.beginPath();
dtx.fillStyle = "black";
dtx.fillRect(260, 45, 30, 505);

dtx.beginPath();
dtx.fillStyle = "black";
dtx.arc(275, 35, 25, 0, 2*Math.PI);
dtx.fill();

dtx.beginPath();
dtx.moveTo(0, 500);
dtx.lineTo(240, 500);
dtx.lineTo(240, 200);
dtx.quadraticCurveTo(220, 350, 0, 500);
dtx.fillStyle = "black";
dtx.fill();

dtx.beginPath();
dtx.moveTo(310, 50);
dtx.quadraticCurveTo(400, 400, 310, 500);
dtx.lineTo(660, 500);
dtx.quadraticCurveTo(620, 300, 310, 50);
dtx.fillStyle = "black";
dtx.fill();
