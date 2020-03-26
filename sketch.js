let array = [];
let x;
let y;
let red;
let blue;
let green;
let start = false;

let ranX;
let ranY;
let ranSize;

let music;

function setup() {
  createCanvas(800, 800);
  background(255, 255, 255);

  strokeWeight(10);

  textSize(40);
  textAlign(CENTER);
  text("CLICK ME AS FAST AS YOU CAN", width/2, height/4 * 3);

  x = width / 2;
  y = height / 2;

  music = createAudio('.../audio/StringedDisco.mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.

    music.autoplay(true);

}

function draw() {

  stroke(red, green, blue);
  circle(x, y, 100);


  if (start) {
    noFill();

    if (frameCount % 8 === 0) { 
    red = random(255);
    green = random(255);
    blue = random(255);
    }

    background(red, green, blue, 25);

    // if (mouseIsPressed) {
    //   stroke(map(mouseX, 0, 600, 0, 255, true))
    //   //line(mouseX, mouseY, pmouseX, pmouseY);
    //   background(backgroundColor, 25);
    //   backgroundColor -= 5;
    //   array.push([mouseX, mouseY]);
    //
    //   beginShape();
    //   for (let i = 0; i < array.length; i++) {
    //     //line(array[i][0], array[i][1], array[i+ 1][0], array[i + 1][1]);
    //     curveVertex(array[i][0], array[i][1]);
    //   }
    //   endShape();
    // }

    //stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(mouseX, mouseY, pmouseX, pmouseY);
    background(backgroundColor, 10);
    backgroundColor += 5;
    array.push([mouseX, mouseY]);

    if (keyIsDown(87)) //w
    {
      y -= 10;
    } else if (keyIsDown(83)) //s
    {
      y += 10;
    } else if (keyIsDown(65)) //a
    {
      x -= 10;
    } else if (keyIsDown(68)) //d
    {
      x += 10;
    }
  }
}

function keyTyped() {

  // console.log(` key ${key} s is typed`);
  // if (key === 'q') {
  //   //save this image
  //   saveCanvas('fileName', 'png');
  // }
  if (key === 'e') {
    //display image

    //console.log(array[0]);
    //console.log(array[0][1]);

    beginShape();
    // for (let i = 0; i < array.length; i++) {
    //   //line(array[i][0], array[i][1], array[i+ 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }

    for (let i = 0; i < array.length; i++) {

      curveVertex(x, y);
    }
    endShape();
  }

  return false;
}

function mousePressed() {

  for(let i = 0; i < 5; i++)
  {
  ranX = random(width);
  ranY = random(height);
  ranSize = random(200);

  array = [];
  backgroundColor = 0;
  start = true;

  strokeWeight = ranSize;
  stroke(red, green, blue);
  circle(ranX, ranY, ranSize);


  }
}
