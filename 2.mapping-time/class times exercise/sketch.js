function setup() {
  // set the width & height of the sketch
  createCanvas(800, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 30
  var diameterchange = 4
  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  _.times(now.hours, i =>{
    fill(0)
    circle(100, 10 + i*spacing, 50)
  })

  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each
  _.times(now.min, i =>{
    stroke(100)
    noFill()
    circle(400, 400, 20 + i*diameterchange*5)
  })

  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax
  _.times(now.sec, i =>{
    fill(100+3*i,50+3*i,50+3*i,40)
    circle(400, 400, 20 + i*diameterchange*2)
  })
}