// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;



function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight );
    canvas.parent("#canvas");
    for (var i = 0; i < 900; i++) {
        stars[i] = new Star();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function setup() {
//   createCanvas(width, height);
//   for (var i = 0; i < 1200; i++) {
//     stars[i] = new Star();
//   }
// }

function draw() {
 // speed = map(mouseX, 0, width, 0, 50);
speed=3;
    // background("#3a46ff");
    background('#5bc6c8');
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
