var video;

//Initialize the video element and turn off autoplay and turn off looping.//
window.addEventListener("load", function() {
	video = document.querySelector('.video');
	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	video.autoplay = false;
	console.log("Loop is set to false");
	video.loop = false;
});

//Play the video and update the volume information.//
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

//Pause Video//
document.querySelector("#pause").addEventListener("click", function() {	
	console.log('Pause Video');
	video.pause();
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.//
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video_rate = video.playbackRate *= 0.9;
	console.log("Speed is " + video_rate);
});

//Speed Up Video//
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video_rate = video.playbackRate /= 0.9; 
	console.log("Speed is " + video_rate);
});

//Skip Ahead Video//
document.querySelector("#skip").addEventListener("click", function() {	
	console.log("Skip Ahead");
	video_time = video.currentTime += 10;
	console.log("Video current time is " + video_time);
});


//Unmute and Mute Video//
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute Video");
		video.muted = false;
		this.innerHTML = 'Mute';
	} else {
		console.log("Mute Video");
		video.muted = true;
		this.innerHTML = 'Unmute';
	}
});

//Change the volume based on the slider and update the volume information.//
document.querySelector("#slider").addEventListener("change", function() {
	let element = document.querySelector("#volume");
	element.innerHTML = this.value + "%";
	video.volume = this.value / 100;
	console.log("Current value is " + video.volume);
	console.log(document.querySelector("#volume"));
});

//Utilize the existing oldSchool class on the video element.//
document.querySelector("#vintage").addEventListener("click", function() {	
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video.//
document.querySelector("#orig").addEventListener("click", function() {	
	video.classList.remove("oldSchool");
});


