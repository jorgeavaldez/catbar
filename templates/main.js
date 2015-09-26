var numClicks = 0;
var oldNumClicks = 0;

var dt = 1;
var oldDt = dt;

var spRate = 0;

$("body").keypress(function() {
    oldDt = dt;
    numClicks++;
});

setInterval(function() {
	dt++;

	spRate = ((numClicks - oldNumClicks) / (dt - oldDt)).toPrecision(4);

  oldNumClicks = numClicks;

  $("#counter").text(oldNumClicks);
  $("#rate").text(spRate);

}, 80);

