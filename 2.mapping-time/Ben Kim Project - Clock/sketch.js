var x = 150
var y = 150
var w = 300
var h = 300

function setup() {

  createCanvas(450, 450);
  rectMode(CENTER)
  frameRate(60)
}

function draw(){
 background(255)
  stroke(0)
  strokeWeight(1)

var now = clock()

if(now.sec < 30){
  var secsarc = map(now.sec, 0,30, PI,TWO_PI)
  arc(225,225,w,h, PI, secsarc)
}
else if (now.sec > 30){
  var secsarc = map(now.sec, 30,60, 0,PI)
  arc(225,225,w,h, 0, secsarc)
}
//for (let now.sec = 0) {  
  //arc(225,225,w,h,0,TWO_PI)
  //stroke(255)
//}


if(now.min < 30){
  var minsarc = map(now.min, 0,30, PI,TWO_PI)
  arc(225, 225, 0.6*w, 0.6*h, PI, minsarc)
}else {
  var minsarc = map(now.min, 30,60, 0, PI)
  arc(225,225,0.6*w, 0.6*h, 0, minsarc)
}
  
  if(now.hour < 6){
  var hoursarc = map(now.hour, 0,6, PI,TWO_PI)
  arc(225, 225, 0.3*w, 0.3*h, PI, hoursarc)
}else {
  var hoursarc = map(now.hour, 6,12, 0, PI)
  arc(225,225,0.3*w, 0.3*h, 0, hoursarc)
}
}