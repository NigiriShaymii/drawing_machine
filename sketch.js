function setup() {
  createCanvas(1000, 1000);
  background(220);

  strokeWeight(10);
}

function draw() {

  if(mouseIsPressed)
  {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
