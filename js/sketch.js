// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;


let myWidth = parseInt($('#canvas-background').css('width'));
let myHeight = parseInt($('#canvas-background').css('height'));
console.log(myWidth+" "+myHeight);
function setup() {
    canvas = createCanvas(myWidth,myHeight);
    canvas.parent("#canvas-background");
    for (var i = 0; i < 350; i++) {
        stars[i] = new Star();
    }
}

function windowResized() {
    resizeCanvas(myWidth, myHeight);
}

// function setup() {
//   createCanvas(width, height);
//   for (var i = 0; i < 1200; i++) {
//     stars[i] = new Star();
//   }
// }

function draw() {
//  speed = map(mouseX, 0, height, 0, 32);
speed=10;
    background("black");
    // background('#5bc6c8');
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
