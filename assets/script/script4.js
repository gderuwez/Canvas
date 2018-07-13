let f = document.getElementById("canvas4")
let ftx = f.getContext("2d");

let grd = ftx.createLinearGradient(0, 0, 0, 200)
grd.addColorStop(0, "#c1c1c1");
grd.addColorStop(0.3, "#cfcfcf");
grd.addColorStop(1, "#dcdcdc");

ftx.beginPath();
ftx.fillStyle = "#1a1a1a";
ftx.fillRect(0, 0, 475, 710);

ftx.beginPath();
ftx.moveTo(53, 227);
ftx.bezierCurveTo(53, 60, 160, 45, 230, 44);
ftx.fillStyle = "#6e6e6e"
ftx.fill();

ftx.beginPath();
ftx.moveTo(326, 586);
ftx.lineTo(303, 698);
ftx.lineTo(312, 704);
ftx.lineTo(374, 580);
ftx.lineTo(368, 514);
ftx.fillStyle = "#9a9a9a";
ftx.fill();

ftx.beginPath();
ftx.moveTo(320, 255);
ftx.lineTo(412, 255);
ftx.lineTo(407, 317);
ftx.lineTo(320, 317);
ftx.fillStyle = "#2a2a2a";
ftx.fill();

ftx.beginPath();
ftx.moveTo(253, 119);
ftx.lineTo(330, 124);
ftx.lineTo(353, 235);
ftx.lineTo(262, 235);
ftx.fillStyle = grd;
ftx.fill();

ftx.beginPath();
ftx.moveTo(330, 124);
ftx.lineTo(365, 110);
ftx.bezierCurveTo(370, 120, 420, 200, 413, 282);
ftx.lineTo(403, 284);
ftx.lineTo(375, 262);
ftx.lineTo(353, 235);
ftx.fillStyle = "#ababab";
ftx.fill();

ftx.beginPath();
ftx.moveTo(413, 282);
ftx.lineTo(413, 294);
ftx.lineTo(408, 308);
ftx.lineTo(405, 305);
ftx.lineTo(410, 282);
ftx.fillStyle = "#6d6d6d";
ftx.fill();

ftx.beginPath();
ftx.moveTo(408, 308);
ftx.lineTo(409, 309);
ftx.lineTo(407, 315);
ftx.lineTo(410, 365);
ftx.lineTo(360, 477);
ftx.lineTo(325, 454);
ftx.lineTo(306, 323);
ftx.fillStyle = "#bababa";
ftx.fill();

ftx.beginPath();
ftx.moveTo(325, 454);
ftx.lineTo(311, 457);
ftx.lineTo(307, 475);
ftx.lineTo(327, 467);
ftx.lineTo(360, 477);
ftx.fillStyle = "#3c3c3c";
ftx.fill();

ftx.beginPath();
ftx.moveTo(311, 457);
ftx.lineTo(296, 452);
ftx.lineTo(241, 472);
ftx.lineTo(232, 483);
ftx.lineTo(237, 480);
ftx.lineTo(288, 470);
ftx.lineTo(307, 475);
ftx.fillStyle = "#151515";
ftx.fill();

ftx.beginPath();
ftx.moveTo(237, 480);
ftx.lineTo(286, 478);
ftx.lineTo(306, 486);
ftx.lineTo(307, 475);
ftx.lineTo(288, 470);
ftx.fillStyle = "#191919";
ftx.fill();

ftx.beginPath();
ftx.moveTo(237, 480);
ftx.lineTo(275, 502);
ftx.lineTo(286, 478);
ftx.fillStyle = "#979797";
ftx.fill();

ftx.beginPath();
ftx.moveTo(307, 475);
ftx.lineTo(327, 467);
ftx.lineTo(360, 477);
ftx.lineTo(329, 478);
ftx.lineTo(306, 486);
ftx.fillStyle = "#282828";
ftx.fill();

ftx.beginPath();
ftx.moveTo(410, 365);
ftx.lineTo(381, 487);
ftx.lineTo(353, 549);
ftx.lineTo(330, 582);
ftx.lineTo(321, 590);
ftx.lineTo(330, 552);
ftx.lineTo(342, 530);
ftx.lineTo(325, 505);
ftx.lineTo(360, 477);
ftx.fillStyle = "#777777";
ftx.fill();

ftx.beginPath();
ftx.moveTo(330, 552);
ftx.lineTo(270, 552);
ftx.lineTo(263, 592);
ftx.lineTo(321, 590);
ftx.fillStyle = "#838383";
ftx.fill();

ftx.beginPath();
ftx.moveTo(263, 592);
ftx.lineTo(252, 591);
ftx.lineTo(202, 558);
ftx.lineTo(177, 462);
ftx.lineTo(232, 526);
ftx.lineTo(270, 552);
ftx.fillStyle = "#505050";
ftx.fill();

ftx.beginPath();
ftx.moveTo(202, 558);
ftx.lineTo(161, 525);
ftx.lineTo(111, 478);
ftx.lineTo(118, 411);
ftx.lineTo(148, 429);
ftx.lineTo(177, 462);
ftx.fillStyle = "#2a2a2a";
ftx.fill();

ftx.beginPath();
ftx.moveTo(118, 411);
ftx.lineTo(123, 337);
ftx.lineTo(162, 368);
ftx.lineTo(178, 434);
ftx.lineTo(148, 429);
ftx.fillStyle = "#222222";
ftx.fill();

ftx.beginPath();
ftx.moveTo(123, 337);
ftx.lineTo(56, 314);
ftx.lineTo(84, 404);
ftx.lineTo(81, 410);
ftx.lineTo(111, 478);
ftx.lineTo(118, 411);
ftx.fillStyle = "#3a3a3a";
ftx.fill();

ftx.beginPath();
ftx.moveTo(84, 404);
ftx.lineTo(73, 424);
ftx.lineTo(64, 416);
ftx.lineTo(73, 399);
ftx.lineTo(82, 395);
ftx.fillStyle = "#404040";
ftx.fill();

ftx.beginPath();
ftx.moveTo(330, 552);
ftx.lineTo(270, 552);
ftx.lineTo(275, 515);
ftx.lineTo(334, 520);
ftx.lineTo(342, 530);
ftx.fillStyle = "#bbbbbb";
ftx.fill();

ftx.beginPath();
ftx.moveTo(360, 477);
ftx.lineTo(329, 478);
ftx.lineTo(306, 486);
ftx.lineTo(286, 478);
ftx.lineTo(275, 502);
ftx.lineTo(325, 505);
ftx.fillStyle = "#bebebe";
ftx.fill();

ftx.beginPath();
ftx.moveTo(342, 530);
ftx.quadraticCurveTo(330, 520, 268, 520);
ftx.lineTo(255, 523);
ftx.lineTo(275, 502);
ftx.lineTo(325, 505);
ftx.fillStyle = "#2d2d2d";
ftx.fill();

ftx.beginPath();
ftx.moveTo(262, 235);
ftx.lineTo(245, 255);
ftx.lineTo(180, 263);
ftx.lineTo(182, 197);
ftx.lineTo(253, 119);
ftx.fillStyle = "#9f9f9f";
ftx.fill();

ftx.beginPath();
ftx.moveTo(253, 119);
ftx.lineTo(144, 116);
ftx.lineTo(160, 131);
ftx.lineTo(182, 197);
ftx.fillStyle = "#979797";
ftx.fill();

ftx.beginPath();
ftx.moveTo(144, 116);
ftx.lineTo(110, 116);
ftx.lineTo(197, 56);
ftx.lineTo(253, 119);
ftx.fillStyle = "#969696";
ftx.fill();

ftx.beginPath(); //upper edge
ftx.moveTo(197, 56);
ftx.lineTo(197, 49);
ftx.bezierCurveTo(260, 30, 350, 70, 365, 110);
ftx.lineTo(330, 124);
ftx.lineTo(253, 119);
ftx.fillStyle = "#8e8e8e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(330, 310);
ftx.lineTo(392, 310);
ftx.lineTo(370, 325);
ftx.fillStyle = "#aaaaaa";
ftx.fill();

ftx.beginPath();
ftx.moveTo(330, 305);
ftx.lineTo(342, 305);
ftx.lineTo(342, 313);
ftx.lineTo(369, 320);
ftx.lineTo(370, 340);
ftx.lineTo(325, 323);
ftx.fillStyle = "#434343";
ftx.fill();

ftx.beginPath();
ftx.moveTo(369, 320);
ftx.lineTo(392, 311);
ftx.lineTo(394, 318);
ftx.lineTo(370, 340);
ftx.fillStyle = "#a6a6a6";
ftx.fill();

ftx.beginPath();
ftx.moveTo(335, 307);
ftx.quadraticCurveTo(380, 280, 390, 307);
ftx.quadraticCurveTo(375, 320, 335, 307);
ftx.fillStyle = "#666666";
ftx.fill();

ftx.beginPath();
ftx.arc(375, 301, 9, 0, 2*Math.PI);
ftx.fillStyle = "black";
ftx.fill();

ftx.beginPath();
ftx.moveTo(335, 307);
ftx.quadraticCurveTo(380, 280, 390, 307);
ftx.quadraticCurveTo(375, 270, 335, 307);
ftx.fillStyle = "#999999";
ftx.fill();

ftx.beginPath();
ftx.moveTo(353, 235);
ftx.lineTo(375, 262);
ftx.lineTo(340, 282); //upper edge of nose
ftx.lineTo(287, 280); //upper edge of nose
ftx.lineTo(245, 255);
ftx.lineTo(262, 235);
ftx.fillStyle = "#8b8b8b";
ftx.fill();

ftx.beginPath();
ftx.moveTo(245, 254);
ftx.lineTo(239, 279);
ftx.lineTo(185, 285);
ftx.lineTo(175, 290);
ftx.lineTo(161, 306);
ftx.lineTo(176, 307);
ftx.lineTo(200, 288);
ftx.lineTo(219, 285);
ftx.lineTo(233, 284);
ftx.lineTo(251, 292);
ftx.lineTo(244, 294);
ftx.lineTo(253, 303);
ftx.lineTo(247, 308);
ftx.lineTo(253, 311);
ftx.lineTo(263, 313);
ftx.lineTo(295,295);
ftx.lineTo(287, 279);
ftx.fillStyle = "#131313"
ftx.fill();

ftx.beginPath();
ftx.moveTo(176, 307);
ftx.lineTo(192, 307);
ftx.lineTo(211, 298);
ftx.lineTo(200, 288);
ftx.fillStyle = "#6c6c6c";
ftx.fill();

ftx.beginPath();
ftx.moveTo(211, 298);
ftx.lineTo(251, 292);
ftx.lineTo(233, 284);
ftx.lineTo(219, 285);
ftx.lineTo(200, 288);
ftx.fillStyle = "#9e9e9e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(245, 254);
ftx.lineTo(180, 263);
ftx.lineTo(185, 285);
ftx.lineTo(239, 279);
ftx.fillStyle = "#5a5a5a";
ftx.fill();

ftx.beginPath();
ftx.moveTo(180, 263);
ftx.lineTo(129, 289);
ftx.lineTo(156, 310);
ftx.lineTo(161, 306);
ftx.lineTo(175, 290);
ftx.lineTo(185, 285);
ftx.fillStyle = "#2c2c2c";
ftx.fill();

ftx.beginPath();
ftx.moveTo(161, 306);
ftx.lineTo(175, 307);
ftx.lineTo(177, 317);
ftx.lineTo(163, 316);
ftx.lineTo(156, 310);
ftx.fillStyle = "#4b4b4b";
ftx.fill();

ftx.beginPath();
ftx.moveTo(129, 289);
ftx.lineTo(124, 285);
ftx.lineTo(56, 297);
ftx.lineTo(56, 314);
ftx.lineTo(123, 337);
ftx.fillStyle = "#555555";
ftx.fill();

ftx.beginPath();
ftx.moveTo(129, 289);
ftx.lineTo(123, 337);
ftx.lineTo(162, 368);
ftx.lineTo(163, 316);
ftx.fillStyle = "#666666";
ftx.fill();

ftx.beginPath();
ftx.moveTo(162, 368);
ftx.lineTo(205, 390);
ftx.lineTo(268, 358);
ftx.lineTo(290, 318);
ftx.lineTo(163, 316);
ftx.fillStyle = "#c0c0c0";
ftx.fill();

ftx.beginPath();
ftx.moveTo(162, 368);
ftx.lineTo(178, 434);
ftx.lineTo(148, 429);
ftx.lineTo(232, 526);
ftx.lineTo(232, 483);
ftx.lineTo(241, 472);
ftx.lineTo(213, 455);
ftx.lineTo(205, 389);
ftx.fillStyle = "#6d6d6d";
ftx.fill();

ftx.beginPath();
ftx.moveTo(232, 526);
ftx.lineTo(255, 523);
ftx.lineTo(237, 522);
ftx.lineTo(275, 520);
ftx.lineTo(270, 552);
ftx.fillStyle = "#848484";
ftx.fill();

ftx.beginPath();
ftx.moveTo(232, 526);
ftx.lineTo(255, 523);
ftx.lineTo(275, 502);
ftx.lineTo(237, 480);
ftx.lineTo(232, 483);
ftx.fillStyle = "#858585";
ftx.fill();

ftx.beginPath();
ftx.moveTo(205, 389);
ftx.lineTo(255, 365);
ftx.lineTo(258, 396);
ftx.lineTo(256, 406);
ftx.lineTo(213, 455);
ftx.fillStyle = "#b7b7b7";
ftx.fill();

ftx.beginPath();
ftx.moveTo(255, 365);
ftx.lineTo(268, 358);
ftx.lineTo(273, 380);
ftx.lineTo(258, 396);
ftx.fillStyle = "#515151";
ftx.fill();

ftx.beginPath();
ftx.moveTo(213, 455);
ftx.lineTo(241, 472);
ftx.lineTo(296, 452);
ftx.lineTo(311, 457);
ftx.lineTo(311, 439);
ftx.lineTo(256, 406);
ftx.fillStyle = "#959595";
ftx.fill();

ftx.beginPath();
ftx.moveTo(177, 317);
ftx.lineTo(209, 341);
ftx.lineTo(213, 326);
ftx.lineTo(183, 307);
ftx.lineTo(175, 307);
ftx.fillStyle = "#494949";
ftx.fill();

ftx.beginPath();
ftx.moveTo(213, 326);
ftx.lineTo(256, 305);
ftx.lineTo(262, 312);
ftx.lineTo(258,319);
ftx.lineTo(209, 341);
ftx.fillStyle = "#7e7e7e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(213, 326);
ftx.lineTo(219, 315);
ftx.lineTo(189, 306);
ftx.lineTo(183, 307);
ftx.fillStyle = "#949494";
ftx.fill();

ftx.beginPath();
ftx.moveTo(219, 315);
ftx.lineTo(256, 305);
ftx.lineTo(213, 326);
ftx.fillStyle = "#b2b2b2";
ftx.fill();

ftx.beginPath();
ftx.moveTo(192, 307);
ftx.bezierCurveTo(188, 300, 240, 276, 255, 302);
ftx.bezierCurveTo(260, 307, 210, 323, 192, 307);
ftx.fillStyle = "#525252"
ftx.fill();

ftx.beginPath()
ftx.arc(234, 300, 9, 0, 2*Math.PI);
ftx.fillStyle = "black";
ftx.fill();

ftx.beginPath();
ftx.moveTo(316, 391);
ftx.lineTo(311, 411);
ftx.lineTo(283, 403);
ftx.lineTo(267, 407);
ftx.lineTo(256, 406);
ftx.lineTo(266, 413);
ftx.lineTo(281, 407);
ftx.lineTo(307, 415);
ftx.lineTo(329, 414);
ftx.lineTo(345, 400);
ftx.lineTo(345, 391);
ftx.fillStyle = "#585858"
ftx.fill();

ftx.beginPath();
ftx.moveTo(316, 391);
ftx.lineTo(294, 386);
ftx.lineTo(287, 394);
ftx.lineTo(281, 394);
ftx.lineTo(269, 400);
ftx.lineTo(258, 396);
ftx.lineTo(256, 406);
ftx.lineTo(267, 407);
ftx.lineTo(283, 403);
ftx.lineTo(311, 411);
ftx.fillStyle = "#232323";
ftx.fill();

ftx.beginPath();
ftx.moveTo(258, 396);
ftx.quadraticCurveTo(257, 383, 273, 380);
ftx.lineTo(281, 394);
ftx.lineTo(269, 400);
ftx.fillStyle = "#9f9f9f";
ftx.fill();

ftx.beginPath();
ftx.moveTo(273, 380);
ftx.lineTo(293, 368);
ftx.lineTo(294, 386);
ftx.fillStyle = "#787878";
ftx.fill();

ftx.beginPath();
ftx.moveTo(273, 380);
ftx.lineTo(284, 379);
ftx.lineTo(294, 386);
ftx.lineTo(287, 394);
ftx.lineTo(281, 394);
ftx.fillStyle = "#4e4e4e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(273, 380);
ftx.lineTo(268, 367);
ftx.lineTo(268, 354);
ftx.lineTo(293, 368);
ftx.fillStyle = "#3e3e3e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(316, 391);
ftx.lineTo(294, 386);
ftx.lineTo(293, 368);
ftx.lineTo(268, 354);
ftx.lineTo(281, 336);
ftx.lineTo(314, 352);
ftx.fillStyle = "#a0a0a0";
ftx.fill();

ftx.beginPath();
ftx.moveTo(250, 351);
ftx.lineTo(280, 316);
ftx.lineTo(276, 321);
ftx.lineTo(281, 324);
ftx.lineTo(278, 327);
ftx.fillStyle = "#a7a7a7";
ftx.fill();

ftx.beginPath();
ftx.moveTo(250, 351);
ftx.lineTo(255, 365);
ftx.lineTo(268, 358);
ftx.lineTo(284, 330);
ftx.lineTo(277, 326);
ftx.fillStyle = "#939393";
ftx.fill();

ftx.beginPath();
ftx.moveTo(314, 352);
ftx.lineTo(313, 345);
ftx.lineTo(302, 323);
ftx.lineTo(301, 320);
ftx.lineTo(294, 321);
ftx.lineTo(292, 322);
ftx.lineTo(280, 316);
ftx.lineTo(276, 321);
ftx.lineTo(281, 324);
ftx.lineTo(278, 327);
ftx.lineTo(284, 330);
ftx.lineTo(281, 336);
ftx.fillStyle = "#656565";
ftx.fill();

ftx.beginPath();
ftx.moveTo(280, 316);
ftx.lineTo(284,301);
ftx.lineTo(265,307);
ftx.lineTo(258,319);
ftx.lineTo(276, 321);
ftx.fillStyle = "#4e4e4e";
ftx.fill();

ftx.beginPath();
ftx.moveTo(280, 316);
ftx.lineTo(285,295);
ftx.lineTo(295,295);
ftx.lineTo(302, 320);
ftx.lineTo(293, 323);
ftx.fillStyle = "#a0a0a0"
ftx.fill();

ftx.beginPath();
ftx.moveTo(266, 413);
ftx.lineTo(311, 439);
ftx.lineTo(308, 420);
ftx.lineTo(280, 413);
ftx.fillStyle = "#222222";
ftx.fill();

ftx.beginPath();
ftx.moveTo(311, 439);
ftx.lineTo(321, 426);
ftx.lineTo(326, 417);
ftx.lineTo(307, 418);
ftx.fillStyle = "#1e1e1e"
ftx.fill();

ftx.beginPath();
ftx.moveTo(344, 381);
ftx.quadraticCurveTo(348, 390, 354, 396);
ftx.quadraticCurveTo(357, 408, 343, 413);
ftx.lineTo(349, 402);
ftx.lineTo(329, 414);
ftx.lineTo(345, 400);
ftx.fillStyle = "#d5d5d5";
ftx.fill();

ftx.beginPath();
ftx.moveTo(325, 454);
ftx.lineTo(311, 457);
ftx.lineTo(311, 439);
ftx.lineTo(321, 426);
ftx.fillStyle = "#858585";
ftx.fill();

ftx.beginPath();
ftx.moveTo(266, 413);
ftx.lineTo(280, 413);
ftx.lineTo(304, 420);
ftx.lineTo(336, 417);
ftx.lineTo(343, 413);
ftx.lineTo(349, 402);
ftx.lineTo(329, 414);
ftx.lineTo(307, 415);
ftx.lineTo(281, 407);
ftx.fillStyle = "black";
ftx.fill();

ftx.beginPath();
ftx.moveTo(287, 280);
ftx.lineTo(295, 297);
ftx.lineTo(302, 323);
ftx.lineTo(313, 345);
ftx.lineTo(316, 391);
ftx.arc(331, 391, 15, Math.PI, 0, true);
ftx.lineTo(344, 379);
ftx.lineTo(336, 355);
ftx.lineTo(332, 332);
ftx.lineTo(331, 316);
ftx.lineTo(329, 306);
ftx.lineTo(332, 290);
ftx.lineTo(340, 282);
ftx.fillStyle = "#dddddd";
ftx.fill();

ftx.beginPath();
ftx.moveTo(180, 263);
ftx.lineTo(129, 289);
ftx.lineTo(124, 285);
ftx.lineTo(182, 197);
ftx.fillStyle = "#575757";
ftx.fill();

ftx.beginPath();
ftx.moveTo(124, 285);
ftx.lineTo(56, 297);
ftx.lineTo(53, 227);
ftx.bezierCurveTo(53, 170, 75, 123, 110, 116);
ftx.lineTo(144, 116);
ftx.lineTo(160, 131);
ftx.lineTo(182, 197);
ftx.fillStyle = "#494949";
ftx.fill();

ftx.beginPath();
ftx.moveTo(50, 400);
ftx.lineTo(35, 350);
ftx.lineTo(32, 300);
ftx.lineTo(52, 300);
ftx.lineTo(80, 394);
ftx.fillStyle = "#222222";
ftx.fill();

ftx.beginPath();
ftx.moveTo(64, 416);
ftx.lineTo(58, 406);
ftx.lineTo(58, 398);
ftx.lineTo(67, 398);
ftx.lineTo(70, 389);
ftx.lineTo(64, 376);
ftx.lineTo(68, 366);
ftx.lineTo(62, 360);
ftx.lineTo(60, 352);
ftx.lineTo(65, 342);
ftx.lineTo(50, 322);
ftx.lineTo(49, 294);
ftx.lineTo(59, 305);
ftx.lineTo(82, 395);
ftx.lineTo(73, 399);
ftx.fillStyle = "#4d4d4d";
ftx.fill();

ftx.beginPath();
ftx.moveTo(49, 294);
ftx.lineTo(44, 290);
ftx.lineTo(27, 299);
ftx.lineTo(50, 322);
ftx.fillStyle = "#949494";
ftx.fill();

ftx.beginPath();
ftx.moveTo(42, 332);
ftx.lineTo(32, 326);
ftx.lineTo(34, 357);
ftx.lineTo(44, 368);
ftx.lineTo(48, 368);
ftx.lineTo(40, 358);
ftx.fillStyle = "#5b5b5b";
ftx.fill();

ftx.beginPath();
ftx.moveTo(42, 332);
ftx.lineTo(40, 318);
ftx.lineTo(32, 313);
ftx.lineTo(35, 306);
ftx.lineTo(27, 299);
ftx.lineTo(32, 326);
ftx.fillStyle = "#454545";
ftx.fill();

ftx.beginPath();
ftx.moveTo(58, 398);
ftx.lineTo(44, 378);
ftx.lineTo(39, 381);
ftx.lineTo(59, 420);
ftx.lineTo(73, 424);
ftx.lineTo(64, 416);
ftx.lineTo(58, 406);
ftx.fillStyle = "#6b6b6b";
ftx.fill();

ftx.beginPath();
ftx.moveTo(42, 380);
ftx.lineTo(34, 357);
ftx.lineTo(44, 368);
ftx.lineTo(52, 367);
ftx.lineTo(62, 388);
ftx.lineTo(66, 387);
ftx.lineTo(69, 394);
ftx.lineTo(67, 398);
ftx.lineTo(58, 398);
ftx.lineTo(44, 378);
ftx.fillStyle = "#8d8d8d";
ftx.fill();

ftx.beginPath();
ftx.moveTo(76, 418);
ftx.lineTo(124, 614);
ftx.lineTo(104, 479);
ftx.lineTo(164, 536);
ftx.lineTo(205, 567);
ftx.lineTo(250, 595);
ftx.lineTo(262, 597);
ftx.lineTo(318, 595);
ftx.lineTo(332, 580);
ftx.lineTo(321, 590);
ftx.lineTo(263, 592);
ftx.lineTo(252, 591);
ftx.lineTo(202, 558);
ftx.lineTo(161, 525);
ftx.lineTo(111, 478);
ftx.lineTo(81, 410);
ftx.fillStyle = "#131313";
ftx.fill();

ftx.beginPath();
ftx.moveTo(104, 479);
ftx.lineTo(109, 511);
ftx.lineTo(156, 561);
ftx.lineTo(140, 513);
ftx.fillStyle = "#242424";
ftx.fill();

ftx.beginPath();
ftx.moveTo(156, 561);
ftx.lineTo(190, 682);
ftx.lineTo(124, 614);
ftx.lineTo(109, 511);
ftx.fillStyle = "#444444";
ftx.fill();

ftx.beginPath();
ftx.moveTo(190, 682);
ftx.lineTo(226, 698);
ftx.lineTo(228, 641);
ftx.lineTo(244, 612);
ftx.lineTo(209, 570);
ftx.lineTo(205, 567);
ftx.lineTo(164, 536);
ftx.lineTo(140, 513);
ftx.lineTo(156, 561);
ftx.fillStyle = "#131313";
ftx.fill();

ftx.beginPath();
ftx.moveTo(326, 586);
ftx.lineTo(303, 698);
ftx.lineTo(288, 697);
ftx.lineTo(297, 613);
ftx.lineTo(318, 595);
ftx.fillStyle = "#424242";
ftx.fill();

ftx.beginPath();
ftx.moveTo(232, 632);
ftx.lineTo(297, 613);
ftx.lineTo(318, 595);
ftx.lineTo(262, 597);
ftx.lineTo(250, 595);
ftx.lineTo(205, 567);
ftx.lineTo(244, 612);
ftx.fillStyle = "#191919";
ftx.fill();

ftx.beginPath();
ftx.moveTo(232, 632);
ftx.lineTo(228, 641);
ftx.lineTo(226, 698);
ftx.lineTo(288, 697);
ftx.lineTo(297, 613);
ftx.fillStyle = "#353535";
ftx.fill();
