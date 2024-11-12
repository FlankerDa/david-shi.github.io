// Puzzle Game
// David Shi
// 2024/10/30
// mechanics for a simple puzzle game

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 255, 0, 0, 0],
[255, 255, 255, 0, 0]];
let flipPattern = 'cross'
let overlayPattern = 'cross'


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizedStartingArrangement()
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();  //render the current game board to the screen (and the overlay)
  winCondition();
  drawOverlay();

}

function randomizedStartingArrangement() {
  // Fill gridData with random 0s and 255s
  gridData = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let newRow = [];
    for (let j = 0; j < NUM_COLS; j++) {
      newRow.push(random([0, 255]));
    }
    gridData.push(newRow);
  }
}



function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array

  if (keyCode === SHIFT && keyIsPressed) {
    flip(currentCol, currentRow);
  }
  else {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);

  }
}


function flip(col, row,) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else {
        gridData[row][col] = 0;


      }

    }
  }
}
function determineActiveSquare() {
    // An expression to run each frame to determine where the mouse currently is.
    currentRow = int(mouseY / rectHeight);
    currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
    // Render a grid of squares - fill color set according to data stored in the 2D array
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        fill(gridData[y][x]);
        rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      }
    }
}

function winCondition() {
    let firstValue = gridData[0][0];
    let allSame = true;


  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] !== firstValue) {
        allSame = false;
        break;
      }
    }
    if (!allSame) { break; }
  }


    if (allSame) {
      textSize(32);
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      text("You Win", width / 2, height / 2);
    }
  }

function highlightSquare(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {

    rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
  }
}

function drawOverlay() {
  
  fill(100, 100, 255, 150);
  noStroke();
  if (overlayPattern === 'cross') {
    highlightSquare(currentCol, currentRow);
    highlightSquare(currentCol - 1, currentRow);
    highlightSquare(currentCol + 1, currentRow);
    highlightSquare(currentCol, currentRow - 1);
    highlightSquare(currentCol, currentRow + 1);
  } else if (overlayPattern === 'square') {
  
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        highlightSquare(currentCol + j, currentRow + i);
      }
    }
  }
}


function keyPressed() {

  if (key === 'R') {
    randomizedStartingArrangement();
  }

  if (key === ' ') {
    if (keyIsDown(SHIFT)) {
      overlayPattern = (overlayPattern === 'cross') ? 'square' : 'cross';
    } else {
      flipPattern = (flipPattern === 'cross') ? 'square' : 'cross';
    }
  }
}

