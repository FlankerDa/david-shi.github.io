// The Balloon Tree
// David Shi
// 2024/11/14
//
// Generates an tree with balloons on there.m



let scale = 15;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  drawTree(width/2, height*0.9, 90, 6);
}

function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawLeaf(x, y){

  fill(random());
  circle(x, y, 20);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scale; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scale; //using trig ratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a ３-branch tree:
    drawTree(x2, y2, angle-30-mouseX, depth-1);
    drawTree(x2, y2, angle+30+mouseX, depth-1);
    drawTree(x2, y2, angle+0, depth-1);
    drawLeaf(x2, y2);
  }
}
