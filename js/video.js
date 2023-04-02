var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	
	video.load();
	
	video.autoplay = false;
	console.log("Auto play is set to false");
	
	video.loop = false;
	console.log("Loop is set to false");


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
	
	
	video.playbackRate = .9 * video.playbackRate;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);

});
document.querySelector("#faster").addEventListener("click", function() {
	
	
	video.playbackRate = video.playbackRate/.9;
	console.log("Speed up Video");
	console.log("Speed is", video.playbackRate);

});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");

	let time = 10;
	if(video.currentTime + time > video.duration){
		video.currentTime = 0;
		console.log("Video current time is ",video.currentTime);
	}
	else{
		video.currentTime += time;
		console.log("Video current time is ",video.currentTime);
	}
	
});
document.querySelector("#mute").addEventListener("click", function() {

	let button = document.querySelector("#mute");
	
	if(this.innerHTML == "Unmute"){
		video.muted = false;
		button.innerHTML = "Mute";
		console.log("Unmuted");
	}
	else{
		video.muted = true;
		button.innerHTML = "Unmute";
		console.log("Muted");
	}
	
});
document.querySelector("#slider").addEventListener("click", function() {
	
	let val = document.querySelector("#slider").value;
	video.volume = val/100;
	console.log("the current volume is", video.volume);
	
	let num = document.querySelector("#volume");
	num.textContent = val + "%";

});
document.querySelector("#vintage").addEventListener("click", function() {
	
	video.classList.add("oldSchool");
	
	

});
document.querySelector("#orig").addEventListener("click", function() {
	
	
	video.classList.remove("oldSchool");
	
	

});


