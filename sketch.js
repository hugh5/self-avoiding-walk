var grid;

function setup() {
  createCanvas(800, 800);

  addElements();
  frameRate(fpsSlider.value());

  var dimension = createVector(xslider.value(), yslider.value());
  grid = new Grid(dimension.x, dimension.y);
}

function draw() {
  grid.show();
}