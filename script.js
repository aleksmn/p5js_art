function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 60, 60);
}


// Примеры
// https://www.youtube.com/watch?v=o5t7PxRJSXk