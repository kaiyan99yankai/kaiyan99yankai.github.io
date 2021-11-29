// Variables!
var radius = 5;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");
var fill = true;

// I would add more variables for x, y, radius, and color
resizeCanvas();
var color = "rgb(255, 0, 0)";
//Listeners!!
//Add a listener for loading the window
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas(){
	canvas.width = 0.75*window.innerWidth;
	canvas.height = 0.75*window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//Add a listener for the color picker

colorPicker.addEventListener("change", changeColor, false);

function changeColor(e){
	color = e.target.value;
}
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


canvas.addEventListener('mousemove', function(e){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI);
	if(fill){
		ctx.fill();
	}
	ctx.endPath();
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	if(e.keyCode == 71){
		color = "rgb(0, 255, 0)";
	}else if(e.keyCode == 82){
		color = "rgb(255, 0, 0)";
	}else if(e.keyCode == 66){
		color = "rgb(0, 0, 255)";
	}else if(e.keyCode == 32){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}else if(e.keyCode == 38){
		fill = false;
	}else if(e.keyCode == 40){
		fill = true;
	}
})

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
}

