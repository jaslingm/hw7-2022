var video = document.getElementById('video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
});

document.querySelector("#play").addEventListener("click", play);
	function play() {
		console.log("Playing Video");
		video.play();
	}

document.querySelector("#pause").addEventListener("click", pause);
	function pause() {
		console.log("Pausing Video");
		video.pause();
	}

document.querySelector("#mute").addEventListener("click", mute);
	function mute() {
		console.log("Muting Video");
		video.muted = true;
		console.log("Muting Video");
	}
	
document.querySelector("#unmute").addEventListener("click", unmute);
 	function unmute() {
		console.log("Unmuting Video");
		video.muted= false
	}

document.querySelector("#slower").addEventListener("click", slowDown);

	function slowDown() {
		console.log("Slowing Down Video");
		video.playbackRate -= 0.10;
	}

document.querySelector("#faster").addEventListener("click", speedUp);
	
	function speedUp() {
		console.log("Speeding Up Video");
		video.playbackRate *= slow; 
	}

document.querySelector("#skip").addEventListener("click", skipAhead);
	
	function speedAhead() {
		console.log("Skiping Video");
		video.currentTime += 10;
	}

video.addEventListener('ended', function() {
	video.currentTime = 0;
	video.play();
});



