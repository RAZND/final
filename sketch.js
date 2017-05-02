var x = 0;
var speed = 3;
var angle = 0;
var y = 0;
var cnv;

function setup() {
    background(255);
  createCanvas(1200, 1200);
    
      cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    cnv.style("z-index", -1);
}

function draw() {
  noFill();
    
// HOW CAN WE MAKE THE BALL
// TURN AROUND AND COME BACK? loop
    translate(x, y);
    rotate(radians(angle));
    //scale(mouseX/30.0);
    //translate(width/2, height/2);
//twice as big
    scale(1);
    //strokeWeight(5);
stroke(random(200), random(200), random(200), random(100));
    line(0, 0, 100, 50);
    line(50, -100, -50, 50);
    
    stroke(100, 80, 100);
    
rect(0, 0, 200, 200);

    angle++;
    
    var easing = 0.05;
    var diffX = mouseX - x;
    x += diffX * easing;

    var diffY = mouseY - y;
    y += diffY * easing;

    
    
   // ellipse(x, 200, 100, 100);
  //  fill(random(255), random(255), random(255), random(150));
  //  stroke(random(255), random(255), random(255), random(150));
  //  strokeWeight(10);
    
   // if (x > width) {
    //    speed = -3;
   // }
   // if(x == 0){
    //    speed = 3;
   // }
    
 x = x + speed;

}

function mousePressed() {
   background(0);
}

function mouseReleased() {
    background(255);
}