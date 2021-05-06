function setup() {
  createCanvas(600, 300);
  noLoop();
}

function draw() {
  var a = 10;
  var i = 0;
  for (i;i<=400;i++){
  stroke(0,0,random(0,100),random(0,100));
  strokeWeight(2);
  line(mouseX,mouseY,random(0,600),random(0,300));
  ellipse(mouseX, mouseY, a, a);
  }
}

function mousePressed(){
  clear();
  redraw();
}
