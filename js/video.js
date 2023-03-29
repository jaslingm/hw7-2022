var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate -= 0.10;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= slow; 
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	var video = document.getElementById('player1');
	video.currentTime += value;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video"); 
	if (video.muted == false) {
	video.muted = true;
	}
	else {
	var button = document.getElementById('mute');
		button.onclick = function() {
		video.muted = true;
		}
	}
});

function slide() {
let volume = document.querySelector("slider").volume;
console.log(volume);
video.volume = volume;
};

