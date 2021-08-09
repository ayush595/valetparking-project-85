var canvas= document.getElementById("canvaus");
ctx = canvas.getContext("2d");

var carwid= 75;
var carhei=  225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var greenx= 5;
var greeny= 225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload= uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greenx, greeny, carwid, carhei);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greeny >= 0) {
		greeny= greeny - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (greeny <= 600) {
		greeny = greeny + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (greenx >= 0) {
		greenx = greenx - 10;
		uploadBackground();
		uploadgreencar();
	}	
}

function right()
{
	if (greenx <= 800) {
		greenx = greenx + 10;
		uploadBackground();
		uploadgreencar();
	}	
}
