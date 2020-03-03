function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var radius = 100
  var hourRadius = radius*now.progress.day
  var spacing = 150
  var hourWidth = map(now.weekday, 1,7, 150,1050)

  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  _.times(7, i =>{
    fill(0)
    circle(150 + i*spacing, 400, 100)
  })

let from = color(255, 165, 32);
let to = color(72, 61, 139);
colorMode(RGB);

  fill(lerpColor(from,to,now.season/4))
  circle (hourWidth, 400, hourRadius)
  
}