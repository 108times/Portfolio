// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;



function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight +25);
    canvas.parent("#canvas");
    background(0,17,65)
    for (var i = 0; i < 600; i++) {
        stars[i] = new Star();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight+25);
}

// function setup() {
//   createCanvas(width, height);
//   for (var i = 0; i < 1200; i++) {
//     stars[i] = new Star();
//   }
// }

function draw() {
  // speed = map(mouseX, 0, width, 0, 50);
    speed = 16;
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
