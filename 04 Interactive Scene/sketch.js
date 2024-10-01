// Project Title
// Your Name
// Date
//




let currentBack = 0

let CBCR = 28
let CBCG = 37
let CBCB = 60

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  let sun = color(255, 255, 255);

  background(CBCR, CBCG, CBCG);

  // sun rays
  fill(255, 192, 0);
  circle(width / 2, height / 2, height * width / 4000);

  if (keyIsPressed === true) {
    fill(254, 137, 0);
  } else {
    fill(255, 0 , 0);
  }
  circle(width / 2, height / 2, height * width / 1000);

  fill(239, 92, 0);
  circle(width / 2, height / 2, height * width / 2000);
  

  // the sun
  sun.setAlpha(225);
  stroke(255, 180, 0);
  strokeWeight(4);
  fill(sun);
  circle(width / 2, height / 2, height * width / 5000);

  // the ocean
  noStroke() 
  fill(100, 0, 107)
  rect(0, height / 2, width, height / 10);

  fill(75, 0, 107)
  rect(0, height / 1.7, width, height / 10);

  fill(50, 0, 107)
  rect(0, height / 1.5, width, height / 10);
  
  fill(25, 0, 107)
  rect(0, height / 1.35, width, height / 10);

  fill(0, 0, 107)
  rect(0, height / 1.2, width, height / 10);
  
  fill(0, 25, 107)
  rect(0, height / 1.1, width, height / 10);


  // sun reflection
  sun.setAlpha(135);
  fill(sun);
  ellipse(width / 2, height / 2, height * width / 5000, height * width / 10000);

  // The Protagonist
  stroke(0, 0, 0);
  strokeWeight(3);
  square(mouseX, mouseY, 100);
  circle(mouseX + 25, mouseY + 25, 25);
  circle(mouseX + 75, mouseY + 25, 25);
  
  // Artist's mark
  fill(0);
  textSize(24);
  text("David Shi", 15, height * 9 / 10);

}

// Change background
function mousePressed() {
  if (mouseButton === CENTER) {


    if (currentBack === 0) {
      CBCR = 255
      CBCG = 0
      CBCB = 0
      currentBack = 1
    } else if (currentBack === 1) {
      CBCR = 255
      CBCG = 25
      CBCB = 0
      currentBack = 2


    } else if (currentBack === 2) {
      CBCR = 255
      CBCG = 75
      CBCB = 25
      currentBack = 3
    } else if (currentBack === 3) {
      CBCR = 255
      CBCG = 100
      CBCB = 50
      currentBack = 0
    }
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}