// Cars Cars Cars!
// David Shi
// 2024/10/22
// custom traffic with trffic lights


let eastbound = [];
let westbound = [];
let trafficLight;

// set the cars spawn point
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i =0; i < 20; i++) {
    let yEastbound = random(height / 1.9, height / 3 + height / 2.5);
    eastbound.push(new Vehicle(random(width), yEastbound, floor(random(2)), 1, random(1, 5)));

    let yWastbound = random(height / 3, height / 2.1);
    westbound.push(new Vehicle(random(width), yWastbound, floor(random(2)), 0, random(1, 5)));
  }


  trafficLight = new TrafficLight(width / 2, height / 3 - 40);
}

// draws everything
function draw() {
  background(220);
  drawRoad();
  trafficLight.update();

  let canMove = trafficLight.state === "green";
  
  for (let i = 0; i<eastbound.length; i++){
    if (canMove) {
      eastbound[i].move();
    }
    eastbound[i].display();
  }

  for (let i = 0; i< westbound.length; i++){
    if (canMove){
      westbound[i].action();
    }
    westbound[i].display();
  }
}


function mouseClicked(){
  let Ey = random(height / 1.9, height / 3 + height / 2.5);
  let Wy = random(height /3, height / 2.1);

  // when mouse is clicked the cars spawn
  if (keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(mouseX, Wy, floor(random(2)), 0, random(1, 5)));
  } else {
    eastbound.push(new Vehicle(mouseX, Ey, floor(random(2)), 1, random(1, 5)));
  }


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

// the car
class Vehicle{
  constructor(x, y, type, dir, speed){
    this.x = x;  
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255));
    this.type = type;
    this.xSpeed = speed;
  }


  move() {
    this.x += this.xSpeed * (this.dir === 0 ? -1 : 1);
    if (this.x > width){
      this.x = 0;
    }
    if (this.x < 0){
      this.x = width;
    }
  }

  // random speed
  speedUp() {
    if (this.xSpeed < 15) {
      this.xSpeed += 0.5;
    }
  }



  // random speed
  speedDown() {
    if (this.xSpeed > 0) {
      this.xSpeed -= 0.5;
    }
  }


  // color changing
  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  display(){
    fill(this.c);
    if (this.type === 0){
      this.drawCar();
    }
    if (this.type === 1){
      this.drawTruck();
    }
  }

  // draws the car
  drawCar(){
    rect(this.x,this.y,50,20);
  }

  // draws the truck
  drawTruck(){
    ellipse(this.x,this.y,50,20);
  }

  action(){
    this.move();
    if (random(1) < 0.01) {
      this.speedUp();
    }

    if (random(1) < 0.01) {
      this.speedDown();
    }
    
    if (random(1) < 0.01) {
      this.changeColor();
    }
    this.display();
  }
}

// traffic light
class TrafficLight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = "green";
    this.timer = 0;
  }




  display() {
    fill(this.state === "green" ? 'green' : 'red');
    rect(this.x, this.y, 30, 80);
  }




  toggle() {
    if (this.state === "green") {
      this.state = "red";
      this.timer = 120;
    }
  }




  update() {
    if (this.state === "red") {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.state = "green";
      }
    }
    this.display();
  }
}



// when space pressed turn red
function keyPressed() {
  if (key === ' ') {
    trafficLight.toggle();
  }
}


