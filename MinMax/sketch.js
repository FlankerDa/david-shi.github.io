// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 40;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();
  let smallDiameter = Infinity;
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,60);
    if(d < smallDiameter){
      smallDiameter = d;
    }
    circle(x, y ,d);
  }
}
