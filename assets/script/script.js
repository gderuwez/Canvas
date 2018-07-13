let c = document.getElementById("canvas")
let ctx = c.getContext("2d");
var X = c.width;
var Y = c.height;
ctx.beginPath();
ctx.fillStyle = "#012169";
ctx.fillRect(X/(X/100), Y/(Y/100), X/(X/360), Y/(Y/180));

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(X/(X/100), Y/(Y/100));
ctx.lineTo(X/(X/136), Y/(Y/100));
ctx.lineTo(X/(X/460), Y/(Y/259));
ctx.lineTo(X/(X/460), Y/(Y/280));
ctx.lineTo(X/(X/418), Y/(Y/280));
ctx.lineTo(X/(X/100), Y/(Y/121));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(X/(X/460), Y/(Y/100));
ctx.lineTo(X/(X/418), Y/(Y/100));
ctx.lineTo(X/(X/100), Y/(Y/259));
ctx.lineTo(X/(X/100), Y/(Y/280));
ctx.lineTo(X/(X/136), Y/(Y/280));
ctx.lineTo(X/(X/460), Y/(Y/121));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(X/(X/460), Y/(Y/100));
ctx.lineTo(X/(X/436), Y/(Y/100));
ctx.lineTo(X/(X/310), Y/(Y/160));
ctx.lineTo(X/(X/334), Y/(Y/160));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(X/(X/460), Y/(Y/280));
ctx.lineTo(X/(X/340), Y/(Y/220));
ctx.lineTo(X/(X/360), Y/(Y/220));
ctx.lineTo(X/(X/460), Y/(Y/268));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(X/(X/100), Y/(Y/100));
ctx.lineTo(X/(X/220), Y/(Y/160));
ctx.lineTo(X/(X/196), Y/(Y/160));
ctx.lineTo(X/(X/100), Y/(Y/112));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(X/(X/100), Y/(Y/280));
ctx.lineTo(X/(X/220), Y/(Y/220));
ctx.lineTo(X/(X/244), Y/(Y/220));
ctx.lineTo(X/(X/124), Y/(Y/280));
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(X/(X/100), Y/(Y/160), X/(X/360), Y/(Y/60));

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(X/(X/250), Y/(Y/100), X/(X/60), Y/(Y/180));

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.fillRect(X/(X/262), Y/(Y/100), X/(X/36), Y/(Y/180));

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.fillRect(X/(X/100), Y/(Y/172), X/(X/360), Y/(Y/36));
