var offsetX = $(window).width() / 2;
var offsetY = $(window).height() / 2 - 55;
var together = new Date();
together.setFullYear(1993, 6, 17);
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);
startHeartAnimation();
// if (!document.createElement('canvas').getContext) {
//     var msg = document.createElement("div");
//     msg.id = "errorMsg";
//     msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
//     document.body.appendChild(msg);
//     document.execCommand("stop");
// } else {
//     startHeartAnimation();
// }