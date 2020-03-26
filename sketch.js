let array = [];
let backgroundColor = 200;
let x;
let y;
let color; 

function setup() {
  createCanvas(800, 800);
  background(backgroundColor);

  strokeWeight(10);

  x = width/2;
  y = height/2;

}

function draw() {

  strokeColor = red;
  fill(255);
  circle(x, y, 100);

  noFill();
  background(backgroundColor, 25);

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

  stroke(map(mouseX, 0, 600, 0, 255, true))
  //line(mouseX, mouseY, pmouseX, pmouseY);
  background(backgroundColor, 25);
  backgroundColor -= 5;
  array.push([mouseX, mouseY]);

  if(keyIsDown(87)) //w
  {
    y -= 5;
  }
  else if(keyIsDown(83)) //s
  {
    y += 5;
  }
  else if(keyIsDown(65)) //a
  {
    x -= 5;
  }
  else if(keyIsDown(68)) //d
  {
    x += 5;
  }

}

function keyTyped() {

  console.log(` key ${key} s is typed`);
  if (key === 'q') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'e') {
    //display image

    //console.log(array[0]);
    //console.log(array[0][1]);



    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+ 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }


   return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 55;
}
