let mic;

function setup(){
  createCanvas(windowWidth,windowHeight);

mic = new p5.AudioIn();

mic.start();
}

function draw(){
  background(220,250,160);

let vol = mic.getLevel();
let i = map(vol,0,0.5,10,100);

rect(100,100,i,30);

print(vol);

}

function touchStarted(){
getAudioContext().resume();

}
