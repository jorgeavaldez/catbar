var numClicks = 0;
var dt = 1;
var spRate = 0;

$("body").keypress(function() {
	numClicks++;

	spRate = (numClicks / dt).toPrecision(4);
});

setInterval(function() {
	dt++;
}, 1000);

$("#counter").text(numClicks);
$("#rate").text(spRate);