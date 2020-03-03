  
function setup() { 
  createCanvas(600, 600);
}

function draw() { 
  background('white')
  angleMode(DEGREES);

  var radius = 150;
  var angle = 0;
  var speed = 0.05;
  var centerX = 300;
  var centerY = 300;
  var now = clock()
  var seasonz = map(now.season, 1,4, 0,1)

  background(220);
  
  ellipse(centerX, centerY, 10, 10);

  var angle = map(now.hour, 0,12, 0,360)
  var x = centerX + radius * cos(angle);
  var y = centerY + radius * sin(angle);
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  fill(lerpColor(from, to, seasonz))
  ellipse(x, y, 50, 50);
  
  

}

