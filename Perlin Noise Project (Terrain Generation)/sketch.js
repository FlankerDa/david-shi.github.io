// Perlin Noise Project (Terrain Generation)
// David Shi
// 10/2/2024
// Random Terrain Generator

let rectWidth = 1; 
let rTime = 0.01; 
let rInterval = 0.01; 
let noiseOffset = 0; 
let peakX = 0; 
let peakY = 0; 

function setup() { 
    createCanvas(windowWidth, windowHeight); 
    background(220); 
    frameRate(30); 
    noiseDetail(5, 0.3); 
    rInterval = 0.01; 
}

// generates terrain
function generateTerrain() { 
    let currentPeakY = 0; 
    let currentPeakX = 0; 
    let totalHeight = 0;
    let count = 0;

    // creating rectangles
    for (let x = 0; x <= windowWidth; x += rectWidth) { 
        let rectHeight = noise(rTime); 
        rectHeight = map(rectHeight, 0, 1, 0, 500); 
        rTime += rInterval; 

        noFill(); 
        strokeWeight(4); 
        stroke(51); 
        rect(x, windowHeight, rectWidth, -rectHeight); 

        //avergae
        totalHeight += rectHeight; 
        count++; 

        // find highest point
        if (rectHeight > currentPeakY) { 
            currentPeakX = x; 
            currentPeakY = rectHeight; 
        } 
    } 

    // draws the flag
    if (currentPeakY > peakY) { 
        peakX = currentPeakX; 
        peakY = currentPeakY; 
        drawFlag(peakX, windowHeight - peakY); 
    }

    // calculate and return average height
    let averageHeight = totalHeight / count;
    return averageHeight;
}

//if key is pressed function
function keyPressed() { 
    if (keyCode === LEFT_ARROW) { 
        rectWidth = max(1, rectWidth - 1); 
    } else if (keyCode === RIGHT_ARROW) { 
        rectWidth++; 
    } 
}

//draw flag function
function drawFlag(x, y) { 
    stroke(255, 0, 0); 
    line(x, y, x, y + 20); 
    fill(255, 0, 0); 
    rect(x, y - 20, 20, 10); 
}

function draw() { 
    background(225); 
    let averageHeight = generateTerrain();
    // draws the average line
    stroke(0, 0, 255);
    strokeWeight(2);
    line(0, windowHeight - averageHeight, windowWidth, windowHeight - averageHeight);
}
