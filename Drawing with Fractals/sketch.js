// David Shi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  circleInCirle(width/2, height/2, width);
}

function cantor(x,y,length,depth){
  if(depth > 0){
    line(x,y,x+length,y) 
    let newY = y + 20;
    cantor(x, newY, len/3, depth-1);
    cantor(x+ 2/3*len), newY, len/3, depth-1;
  }
}

function circleInCirle(x, y, d){
  if (d>10){
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01,1.5);
    circleInCirle(x,y,d/den);
  }
}
