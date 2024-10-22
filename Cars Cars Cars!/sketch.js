// Cars Cars Cars!
// David Shi
// 2024/10/22
//
// Extra for Experts:
// custom traffic



function setup() {
  createCanvas(windowWidth, windowHeight);
  let westbound = new vehicle(0,windowHeight/2);
  let eastbound = new vehicle(windowWidth,windowHeight/2 -75);
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
  constructor(x, y, type, color, dir, speed){
    this.x = x;  this.y = y;
    this.steps = 10;  this.speed = 5;
  }
  display(){  //DISPLAY
    let veciType = (Math.random() * 2);
    if (veciType === 0){
      rect(this.x += this.speed);
    }
    if (veciType === 1){

    }
  }

  move(){
    this.x += this.speed;     //MOVEMENT
    this.steps--;  //-=1
    if(this.steps === 0){
      this.steps = windowWidth;
      this.speed *= -1;
    }       
  }
}

function draw() {
  background(220);
  drawRoad();

  westbound.display();
  eastbound.display();
}
