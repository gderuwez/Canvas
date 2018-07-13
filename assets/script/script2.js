let d = document.getElementById("canvas2")
let dtx = d.getContext("2d");
var X2 = d.width;
var Y2 = d.height;

dtx.beginPath();
dtx.moveTo(X2/(X2/10), Y2/(Y2/542));
dtx.quadraticCurveTo(X2/(X2/148), Y2/(Y2/893), X2/(X2/712), Y2/(Y2/542));
dtx.fillStyle = "black";
dtx.fill();

dtx.beginPath();
dtx.fillStyle = "black";
dtx.fillRect(X2/(X2/260), Y2/(Y2/45), X2/(X2/30), Y2/(Y2/505));

dtx.beginPath();
dtx.fillStyle = "black";
dtx.arc(X2/(X2/275), Y2/(Y2/35), 25, 0, 2*Math.PI);
dtx.fill();

dtx.beginPath();
dtx.moveTo(X2/(X2/0), Y2/(Y2/500));
dtx.lineTo(X2/(X2/240), Y2/(Y2/500));
dtx.lineTo(X2/(X2/240), Y2/(Y2/200));
dtx.quadraticCurveTo(X2/(X2/220), Y2/(Y2/350), X2/(X2/0), Y2/(Y2/500));
dtx.fillStyle = "black";
dtx.fill();

dtx.beginPath();
dtx.moveTo(X2/(X2/310), Y2/(Y2/50));
dtx.quadraticCurveTo(X2/(X2/400), Y2/(Y2/400), X2/(X2/310), Y2/(Y2/500));
dtx.lineTo(X2/(X2/660), Y2/(Y2/500));
dtx.quadraticCurveTo(X2/(X2/620), Y2/(Y2/300), X2/(X2/310), Y2/(Y2/50));
dtx.fillStyle = "black";
dtx.fill();
