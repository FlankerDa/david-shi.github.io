// Perlin Noise Project (Terrain Generation)
// David Shi
// 10/2/2024
// Random Terrain Generator

let rectWidth = 15;
let rTime = 5;
let rInterval = 0.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);


}

function generateTerrain() {

  for (let x = 0; x <= windowWidth; x += rectWidth) {
    let rectHeight = noise(rTime)  //0-1
    rectHeight = map(rectHeight, 0, 1, 0, 500);
    rTime += rInterval;


    noFill()
    strokeWeight(4)
    stroke(51)
    rect(x, windowHeight, rectWidth, -rectHeight )
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    rectWidth -= 0.1;
  } else if (keyCode === RIGHT_ARROW) {
    rectWidth += 0.1;
  }
}

function drawFlag(x, y){
  rect(x+5, y+10, 20, 10)
  rect(x+5, y + 10, 5, 10 )
}


function draw() {
  generateTerrain()
  keyPressed();

}
