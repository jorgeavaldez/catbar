var numClicks = 0;
var dt = 1;

$("body").keypress(function() {
	numClicks++;

	var spRate = (numClicks / dt).toPrecision(4);
	if ()
});

setInterval(function() {
	dt++;
}, 1000);

