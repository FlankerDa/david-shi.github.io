// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(220);
  if(started === false){
    text("Click to start", width/2, hieght/2);
    if (mouseIsPressed){
      started = true;
    }
  }

  else{
    text(totalBounces)
  }
}

function updateBall(){
  pos.add(vel);

  if(pos.x < 0 || pos.x > width){
    totalBounces
  }

}
