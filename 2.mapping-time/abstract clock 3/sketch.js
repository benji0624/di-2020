
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 600)

}

function draw() {
  background('white')

  var now = clock()
  var maxWidth = 400
  var maxHeight = 600
  var seasonz = map(now.season, 1,4, 0,1)
  var dayWidth = maxWidth * now.progress.month
  var yearprog = maxHeight * now.progress.year

  background('white')

  let from = color(218, 165, 32);
  let to = color(72, 61, 139);

 fill(lerpColor(from, to, seasonz))
  rect(0, 0+yearprog, dayWidth, 20)
}