
var checkDriverAge2 = function() {
	var age = prompt("You must be 17 or older to drive this car" ,"What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Engine will not be started.");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
		var audio = new Audio("Engine.mp3");
			audio.play();
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
		var audio = new Audio("Engine.mp3");
			audio.play();
	}
}
