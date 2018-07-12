let c = document.getElementById("canvas")
let ctx = c.getContext("2d");

let grd = ctx.createLinearGradient(0, 0, 0, 200)
grd.addColorStop(0, "#c1c1c1");
grd.addColorStop(0.3, "#cfcfcf");
grd.addColorStop(1, "#dcdcdc");

ctx.beginPath();
ctx.moveTo(53, 227);
ctx.bezierCurveTo(53, 60, 160, 45, 230, 44);
ctx.fillStyle = "#6e6e6e"
ctx.fill();

ctx.beginPath();
ctx.moveTo(320, 255);
ctx.lineTo(412, 255);
ctx.lineTo(407, 317);
ctx.lineTo(320, 317);
ctx.fillStyle = "#2a2a2a";
ctx.fill();

ctx.beginPath();
ctx.moveTo(253, 119);
ctx.lineTo(330, 124);
ctx.lineTo(353, 235);
ctx.lineTo(262, 235);
ctx.fillStyle = grd;
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 124);
ctx.lineTo(365, 110);
ctx.bezierCurveTo(370, 120, 420, 200, 413, 282);
ctx.lineTo(403, 284);
ctx.lineTo(375, 262);
ctx.lineTo(353, 235);
ctx.fillStyle = "#ababab";
ctx.fill();

ctx.beginPath();
ctx.moveTo(413, 282);
ctx.lineTo(413, 294);
ctx.lineTo(408, 308);
ctx.lineTo(405, 305);
ctx.lineTo(410, 282);
ctx.fillStyle = "#6d6d6d";
ctx.fill();

ctx.beginPath();
ctx.moveTo(408, 308);
ctx.lineTo(409, 309);
ctx.lineTo(407, 315);
ctx.lineTo(410, 365);
ctx.lineTo(360, 477);
ctx.lineTo(325, 454);
ctx.lineTo(306, 323);
ctx.fillStyle = "#bababa";
ctx.fill();

ctx.beginPath();
ctx.moveTo(325, 454);
ctx.lineTo(311, 457);
ctx.lineTo(307, 475);
ctx.lineTo(327, 467);
ctx.lineTo(360, 477);
ctx.fillStyle = "maroon";
ctx.fill();

ctx.beginPath();
ctx.moveTo(311, 457);
ctx.lineTo(296, 452);
ctx.lineTo(241, 472);
ctx.lineTo(232, 483);
ctx.lineTo(237, 480);
ctx.lineTo(288, 470);
ctx.lineTo(307, 475);
ctx.fillStyle = "salmon";
ctx.fill();

ctx.beginPath();
ctx.moveTo(237, 480);
ctx.lineTo(286, 478);
ctx.lineTo(306, 486);
ctx.lineTo(307, 475);
ctx.lineTo(288, 470);
ctx.fillStyle = "Orchid";
ctx.fill();

ctx.beginPath();
ctx.moveTo(307, 475);
ctx.lineTo(327, 467);
ctx.lineTo(360, 477);
ctx.lineTo(329, 478);
ctx.lineTo(306, 486);
ctx.fillStyle = "#282828";
ctx.fill();

ctx.beginPath();
ctx.moveTo(410, 365);
ctx.lineTo(381, 487);
ctx.lineTo(353, 549);
ctx.lineTo(330, 582);
ctx.lineTo(321, 590);
ctx.lineTo(330, 552);
ctx.lineTo(342, 530);
ctx.lineTo(325, 505);
ctx.lineTo(360, 477);
ctx.fillStyle = "#777777";
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 552);
ctx.lineTo(270, 552);
ctx.lineTo(263, 592);
ctx.lineTo(321, 590);
ctx.fillStyle = "lightgreen";
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 552);
ctx.lineTo(270, 552);
ctx.lineTo(275, 515);
ctx.lineTo(334, 520);
ctx.lineTo(342, 530);
ctx.fillStyle = "darkorange";
ctx.fill();

ctx.beginPath();
ctx.moveTo(360, 477);
ctx.lineTo(329, 478);
ctx.lineTo(306, 486);
ctx.lineTo(286, 478);
ctx.lineTo(275, 502);
ctx.lineTo(325, 505);
ctx.fillStyle = "darkblue";
ctx.fill();

ctx.beginPath();
ctx.moveTo(342, 530);
ctx.quadraticCurveTo(330, 520, 268, 520);
ctx.lineTo(255, 523);
ctx.lineTo(275, 502);
ctx.lineTo(325, 505);
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.moveTo(262, 235);
ctx.lineTo(245, 255);
ctx.lineTo(180, 263);
ctx.lineTo(182, 197);
ctx.lineTo(253, 119);
ctx.fillStyle = "#9f9f9f";
ctx.fill();

ctx.beginPath();
ctx.moveTo(253, 119);
ctx.lineTo(144, 116);
ctx.lineTo(160, 131);
ctx.lineTo(182, 197);
ctx.fillStyle = "#979797";
ctx.fill();

ctx.beginPath();
ctx.moveTo(144, 116);
ctx.lineTo(110, 116);
ctx.lineTo(197, 56);
ctx.lineTo(253, 119);
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath(); //upper edge
ctx.moveTo(197, 56);
ctx.lineTo(197, 49);
ctx.bezierCurveTo(260, 30, 350, 70, 365, 110);
ctx.lineTo(330, 124);
ctx.lineTo(253, 119);
ctx.fillStyle = "#8e8e8e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 310);
ctx.lineTo(392, 310);
ctx.lineTo(370, 325);
ctx.fillStyle = "#aaaaaa";
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 305);
ctx.lineTo(342, 305);
ctx.lineTo(342, 313);
ctx.lineTo(369, 320);
ctx.lineTo(370, 340);
ctx.lineTo(325, 323);
ctx.fillStyle = "#434343";
ctx.fill();

ctx.beginPath();
ctx.moveTo(369, 320);
ctx.lineTo(392, 311);
ctx.lineTo(394, 318);
ctx.lineTo(370, 340);
ctx.fillStyle = "#a6a6a6";
ctx.fill();

ctx.beginPath();
ctx.moveTo(335, 307);
ctx.quadraticCurveTo(380, 280, 390, 307);
ctx.quadraticCurveTo(375, 320, 335, 307);
ctx.fillStyle = "#666666";
ctx.fill();

ctx.beginPath();
ctx.arc(375, 301, 9, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(335, 307);
ctx.quadraticCurveTo(380, 280, 390, 307);
ctx.quadraticCurveTo(375, 270, 335, 307);
ctx.fillStyle = "#999999";
ctx.fill();

ctx.beginPath();
ctx.moveTo(353, 235);
ctx.lineTo(375, 262);
ctx.lineTo(340, 282); //upper edge of nose
ctx.lineTo(287, 280); //upper edge of nose
ctx.lineTo(245, 255);
ctx.lineTo(262, 235);
ctx.fillStyle = "#8b8b8b";
ctx.fill();

ctx.beginPath();
ctx.moveTo(245, 254);
ctx.lineTo(239, 279);
ctx.lineTo(185, 285);
ctx.lineTo(175, 290);
ctx.lineTo(161, 306);
ctx.lineTo(176, 307);
ctx.lineTo(200, 288);
ctx.lineTo(219, 285);
ctx.lineTo(233, 284);
ctx.lineTo(251, 292);
ctx.lineTo(244, 294);
ctx.lineTo(253, 303);
ctx.lineTo(247, 308);
ctx.lineTo(253, 311);
ctx.lineTo(263, 313);
ctx.lineTo(295,295);
ctx.lineTo(287, 279);
ctx.fillStyle = "#131313"
ctx.fill();

ctx.beginPath();
ctx.moveTo(176, 307);
ctx.lineTo(192, 307);
ctx.lineTo(211, 298);
ctx.lineTo(200, 288);
ctx.fillStyle = "#6c6c6c";
ctx.fill();

ctx.beginPath();
ctx.moveTo(211, 298);
ctx.lineTo(251, 292);
ctx.lineTo(233, 284);
ctx.lineTo(219, 285);
ctx.lineTo(200, 288);
ctx.fillStyle = "#9e9e9e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(245, 254);
ctx.lineTo(180, 263);
ctx.lineTo(185, 285);
ctx.lineTo(239, 279);
ctx.fillStyle = "#5a5a5a";
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 263);
ctx.lineTo(129, 289);
ctx.lineTo(156, 310);
ctx.lineTo(161, 306);
ctx.lineTo(175, 290);
ctx.lineTo(185, 285);
ctx.fillStyle = "#2c2c2c";
ctx.fill();

ctx.beginPath();
ctx.moveTo(161, 306);
ctx.lineTo(175, 307);
ctx.lineTo(177, 317);
ctx.lineTo(163, 316);
ctx.lineTo(156, 310);
ctx.fillStyle = "#4b4b4b";
ctx.fill();

ctx.beginPath();
ctx.moveTo(129, 289);
ctx.lineTo(124, 285);
ctx.lineTo(56, 297);
ctx.lineTo(56, 314);
ctx.lineTo(123, 337);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.moveTo(129, 289);
ctx.lineTo(123, 337);
ctx.lineTo(162, 368);
ctx.lineTo(163, 316);
ctx.fillStyle = "khaki";
ctx.fill();

ctx.beginPath();
ctx.moveTo(162, 368);
ctx.lineTo(205, 390);
ctx.lineTo(268, 358);
ctx.lineTo(290, 318);
ctx.lineTo(163, 316);
ctx.fillStyle = "indianred";
ctx.fill();

ctx.beginPath();
ctx.moveTo(162, 368);
ctx.lineTo(178, 434);
ctx.lineTo(148, 429);
ctx.lineTo(232, 526);
ctx.lineTo(232, 483);
ctx.lineTo(241, 472);
ctx.lineTo(213, 455);
ctx.lineTo(205, 389);
ctx.fillStyle = "dodgerblue";
ctx.fill();

ctx.beginPath();
ctx.moveTo(205, 389);
ctx.lineTo(255, 365);
ctx.lineTo(258, 396);
ctx.lineTo(256, 406);
ctx.lineTo(213, 455);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(177, 317);
ctx.lineTo(209, 341);
ctx.lineTo(213, 326);
ctx.lineTo(183, 307);
ctx.lineTo(175, 307);
ctx.fillStyle = "#494949";
ctx.fill();

ctx.beginPath();
ctx.moveTo(213, 326);
ctx.lineTo(256, 305);
ctx.lineTo(262, 312);
ctx.lineTo(258,319);
ctx.lineTo(209, 341);
ctx.fillStyle = "#7e7e7e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(213, 326);
ctx.lineTo(219, 315);
ctx.lineTo(189, 306);
ctx.lineTo(183, 307);
ctx.fillStyle = "#949494";
ctx.fill();

ctx.beginPath();
ctx.moveTo(219, 315);
ctx.lineTo(256, 305);
ctx.lineTo(213, 326);
ctx.fillStyle = "#b2b2b2";
ctx.fill();

ctx.beginPath();
ctx.moveTo(192, 307);
ctx.bezierCurveTo(188, 300, 240, 276, 255, 302);
ctx.bezierCurveTo(260, 307, 210, 323, 192, 307);
ctx.fillStyle = "#525252"
ctx.fill();

ctx.beginPath()
ctx.arc(234, 300, 9, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(316, 391);
ctx.lineTo(311, 411);
ctx.lineTo(283, 403);
ctx.lineTo(267, 407);
ctx.lineTo(256, 406);
ctx.lineTo(266, 413);
ctx.lineTo(281, 407);
ctx.lineTo(307, 415);
ctx.lineTo(329, 414);
ctx.lineTo(345, 400);
ctx.lineTo(345, 391);
ctx.fillStyle = "goldenrod"
ctx.fill();

ctx.beginPath();
ctx.moveTo(316, 391);
ctx.lineTo(294, 386);
ctx.lineTo(287, 394);
ctx.lineTo(281, 394);
ctx.lineTo(269, 400);
ctx.lineTo(258, 396);
ctx.lineTo(256, 406);
ctx.lineTo(267, 407);
ctx.lineTo(283, 403);
ctx.lineTo(311, 411);
ctx.fillStyle = "hotpink";
ctx.fill();

ctx.beginPath();
ctx.moveTo(316, 391);
ctx.lineTo(294, 386);
ctx.lineTo(293, 368);
ctx.lineTo(268, 354);
ctx.lineTo(281, 336);
ctx.lineTo(314, 352);
ctx.fillStyle = "aqua";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 351);
ctx.lineTo(280, 316);
ctx.lineTo(276, 321);
ctx.lineTo(281, 324);
ctx.lineTo(278, 327);
ctx.fillStyle = "#a7a7a7";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 351);
ctx.lineTo(255, 365);
ctx.lineTo(268, 358);
ctx.lineTo(284, 330);
ctx.lineTo(277, 326);
ctx.fillStyle = "powderblue";
ctx.fill();

ctx.beginPath();
ctx.moveTo(314, 352);
ctx.lineTo(313, 345);
ctx.lineTo(302, 323);
ctx.lineTo(301, 320);
ctx.lineTo(294, 321);
ctx.lineTo(292, 322);
ctx.lineTo(280, 316);
ctx.lineTo(276, 321);
ctx.lineTo(281, 324);
ctx.lineTo(278, 327);
ctx.lineTo(284, 330);
ctx.lineTo(281, 336);
ctx.fillStyle = "moccasin";
ctx.fill();

ctx.beginPath();
ctx.moveTo(280, 316);
ctx.lineTo(284,301);
ctx.lineTo(265,307);
ctx.lineTo(258,319);
ctx.lineTo(276, 321);
ctx.fillStyle = "#4e4e4e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(280, 316);
ctx.lineTo(285,295);
ctx.lineTo(295,295);
ctx.lineTo(302, 320);
ctx.lineTo(293, 323);
ctx.fillStyle = "#a0a0a0"
ctx.fill();

ctx.beginPath();
ctx.moveTo(266, 413);
ctx.lineTo(311, 439);
ctx.lineTo(308, 420);
ctx.lineTo(280, 413);
ctx.fillStyle = "coral"
ctx.fill();

ctx.beginPath();
ctx.moveTo(311, 439);
ctx.lineTo(321, 426);
ctx.lineTo(326, 417);
ctx.lineTo(307, 418);
ctx.fillStyle = "#1e1e1e"
ctx.fill();

ctx.beginPath();
ctx.moveTo(344, 381);
ctx.quadraticCurveTo(348, 390, 354, 396);
ctx.quadraticCurveTo(357, 408, 343, 413);
ctx.lineTo(349, 402);
ctx.lineTo(329, 414);
ctx.lineTo(345, 400);
ctx.fillStyle = "#d5d5d5";
ctx.fill();

ctx.beginPath();
ctx.moveTo(325, 454);
ctx.lineTo(311, 457);
ctx.lineTo(311, 439);
ctx.lineTo(321, 426);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.moveTo(266, 413);
ctx.lineTo(280, 413);
ctx.lineTo(304, 420);
ctx.lineTo(336, 417);
ctx.lineTo(343, 413);
ctx.lineTo(349, 402);
ctx.lineTo(329, 414);
ctx.lineTo(307, 415);
ctx.lineTo(281, 407);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(287, 280);
ctx.lineTo(295, 297);
ctx.lineTo(302, 323);
ctx.lineTo(313, 345);
ctx.lineTo(316, 391);
ctx.arc(331, 391, 15, Math.PI, 0, true);
ctx.lineTo(344, 379);
ctx.lineTo(336, 355);
ctx.lineTo(332, 332);
ctx.lineTo(331, 316);
ctx.lineTo(329, 306);
ctx.lineTo(332, 290);
ctx.lineTo(340, 282);
ctx.fillStyle = "#dddddd";
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 263);
ctx.lineTo(129, 289);
ctx.lineTo(124, 285);
ctx.lineTo(182, 197);
ctx.fillStyle = "#575757";
ctx.fill();

ctx.beginPath();
ctx.moveTo(124, 285);
ctx.lineTo(56, 297);
ctx.lineTo(53, 227);
ctx.bezierCurveTo(53, 170, 75, 123, 110, 116);
ctx.lineTo(144, 116);
ctx.lineTo(160, 131);
ctx.lineTo(182, 197);
ctx.fillStyle = "#494949";
ctx.fill();
