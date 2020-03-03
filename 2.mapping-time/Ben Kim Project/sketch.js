var x = 225
var y = 50
var maxWidth = 225
var maxHeight = 550
var hourheight = 20
var minsheight = 12
var secwidth = 6

var discrete = false //only else part is running

function setup() {
  // set the width & height of the sketch
  createCanvas(450, 600);
}

function draw() {
  background(255)
  noStroke()
  
  var now = clock()
   if (discrete){
    var hourWidth = map(now.hour, 1,12, 0,-maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth)
    var secsheight = map(now.sec,  0,60, 0,maxHeight)
   }
   else{
    hourWidth = -maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsheight = maxHeight * now.progress.min
  }

  fill(47,22,82)
  rect(x, y, minsWidth, minsheight)

  fill(47,22,82)
  rect(x, y, hourWidth, hourheight)

  fill(47,22,82)
  rect(x, y, secwidth, secsheight)
}
