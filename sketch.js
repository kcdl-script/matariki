let diameter;
let angle = 0;
let star1Touch = false;
let star2Touch = false;
let star3Touch = false;
let star4Touch = false;
let star5Touch = false;
let star6Touch = false;
let star7Touch = false;
let star8Touch = false;
let star9Touch = false;
let dialogState = false;

function setup() {
  createCanvas(1165, 805);
}

function draw() {
  background(200);
 // console.log(dialogState);
  twinkle(100, 200);
  twinkle(500, 200);

  if (star1Touch == true) {
    dialogState = true;
    push();
        fill(51);
        rect(700, 10, 450, 750);
        circle(1110, 45, 45);
    pop();
    textSize(50)
    text('Matariki', 715, 65)
    textSize(24)
    text('Matariki loves to gather the people together, and to connect them with our environment. She encourages us to do the same, as often as possible. ', 715, 105, 430, 745)

    text('Let’s appreciate what we have got. Take your friends and family and go and have fun in nature! ', 715, 245, 430, 745)
  }

 else if (star2Touch == true) {
    dialogState = true;
    push();
        fill(51);
        rect(700, 10, 450, 750);
        circle(1110, 45, 45);
    pop();
    textSize(24)
    text('whatever', 715, 25)
  }
}

function mousePressed() {
  let star1 = dist(mouseX, mouseY, 100, 200);
  if (star1 < 30) {
    star1Touch = true;
  }

  let star2 = dist(mouseX, mouseY, 500, 200);
  if (star2 < 30) {
    star2Touch = true;
  }

  if (dialogState == true) {
    let d1 = dist(mouseX, mouseY, 1110, 45);
    if (d1 < 22.5) {
      dialogState = false;
      star1Touch = false;
      star2Touch = false;
      star3Touch = false;
      star4Touch = false;
      star5Touch = false;
      star6Touch = false;
      star7Touch = false;
      star8Touch = false;
      star9Touch = false;
    }
  }
}

function twinkle(x, y) {
  let d1 = cos(angle);
  push();
  noStroke()
    translate(x, y);
    scale(lerp(1.5, 1.75, d1));
    star(0, 0, 10, 30, 5);
  pop();
  angle += 0.05;
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
