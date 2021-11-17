window.onload = function () {
	var video = document.getElementById("player1");
	var video_status = false;
	video.onplaying = function(){
		video_status = true;
	}
	window.addEventListener("load", function() {
		console.log("Good job opening the window")
	});
	document.getElementById("play").onclick = function(){
		if(!video_status){
			video.play();
			console.log("Play Video");
			document.getElementById("volume").innerHTML = "100%";
		}else{
			video.play();
			console.log("Play Video");
		}
	};

	document.getElementById("pause").onclick = function(){
		video.pause();
		console.log("Pause Video");
	};

	var play_speed = 1;
	document.getElementById("slower").onclick = function(){
		play_speed -= 0.05;
		video.playbackRate = play_speed;
		console.log(play_speed);
	}
	
	document.getElementById("faster").onclick = function(){
		play_speed += 0.05;
		video.playbackRate = play_speed;
		console.log(play_speed);
	}

	document.getElementById("skip").onclick = function(){
		if (video.currentTime != 67.403333){
			console.log("Original location " + video.currentTime.toString());
			video.currentTime = video.currentTime + 15;
			console.log("New location " + video.currentTime.toString());
		}else{
			console.log("Going back to beginning");
			video.play();
			console.log("New location " + video.currentTime.toString());
		}
	}

	document.getElementById("mute").onclick = function(){
		video.muted ^= true;
		if(video.muted){
			document.getElementById("mute").innerHTML = "Unmute";
		}else{
			document.getElementById("mute").innerHTML = "Mute";
		}
	}

	document.getElementById("slider").addEventListener("change", function(){
		video.volume = document.getElementById("slider").value/100;
		document.getElementById("volume").innerHTML = document.getElementById("slider").value.toString() + "%";
		console.log(document.getElementById("slider").value/100);
	});

	document.getElementById("vintage").onclick = function(){
		video.className = "oldSchool";
	}

	document.getElementById("orig").onclick = function(){
		video.className = "video";
	}

};
