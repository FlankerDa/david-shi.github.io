// Cars Cars Cars!
// David Shi
// 2024/10/22
//
// Extra for Experts:
// custom traffic


let eastbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  drawRoad();
  for (let i = 0; i<eastbound.length; i++){
    eastbound[i].action();
    
  }
}

function mouseClicked(){
  eastbound.push(new Vehicle(mouseX, mouseY, 1));
}

// draws the road
function drawRoad() {
  noStroke();
  fill(30,30,30);
  rect(0, windowHeight/3,windowWidth, windowHeight/2.5);

  // dotted line

  fill(255,255,255);
  for (let x = 0; x < windowWidth; x += 100){

    rect(x, windowHeight/2, 70, 10);
    
  }
}

class Vehicle{
  constructor(x, y, type, dir, speed){
    this.x = x;  
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
  }

  action(){
    this.display();
  }

  display(){  //DISPLAY
    if (this.type === 0){
      this.drawCar();
    }
    if (this.type === 1){
      this.drawTruck();
    }
  }

  drawCar(){
    fill(this.c);
    rect(this.x,this.y,50,20);
  }

  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,50,20);
  }
}


