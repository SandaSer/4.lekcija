let x = 1;
function setup(){
  createCanvas(windowWidth,windowHeight, WEBGL);

}

function draw(){
  background(220,250,160);
push();
//rotateX(x);
//x=x+0.1;

rotateY(10);
rotateZ(10);

translate(300,20);
fill(48,140,200,80);
box(30);
pop();

push();
//noStroke();
fill(200,150,20);

translate(50,100);
sphere(50);
pop();

}
