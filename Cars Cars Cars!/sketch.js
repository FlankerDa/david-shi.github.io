// Cars Cars Cars!
// David Shi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

// draws the road
function drawRoad() {
  noStroke();
  fill(30,30,30);
  rect(0, windowHeight/3,windowWidth, windowHeight/2.5);

  // dotted line

  fill(255,255,255);
  for (let x = 0; x < windowWidth; x += 200){

    rect(x, windowHeight/2, 150, 15);
    
  }
}  

class vehicle{
  
  
}
