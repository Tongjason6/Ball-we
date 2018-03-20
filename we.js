alert("GAME OVER");
// Speed - Velocity
var vx = 10;
var vy = 10;
// Acceleration
var ax = 5;
var ay = 5;

var vMultiplier = 10;
var bMultiplier = 5;
function setup (){
	createCanvas(800,600);
	background(0);
}
function draw () {
   //var ellipseX=50;
  //  while(ellipseX < width){
	ellipse( 50,200,50,50);
	ellipseX = ellipseX + 50;
//}
	}
	function ballMove() {

		ax = accelerationX;
		ay = accelerationY;

		vx = vx + ay;
		vy = vy + ax;
		y = y + vy * vMultiplier;
		x = x + vx * vMultiplier;
	}
