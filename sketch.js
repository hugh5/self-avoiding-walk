var grid;
var depth;
var restart;
var xslider;
var yslider;
var xtext;
var ytext;
var fpsSlider;
var fps;


function setup() {
  createCanvas(800, 800);

  addElements();

  var dimension = createVector(xslider.value(), yslider.value());
  grid = new Grid(dimension.x, dimension.y);
}

function draw() {
  grid.show();
  xtext.html(`length: ${xslider.value()}`);
  ytext.html(`width: ${yslider.value()}`);
  fps.html(`speed: ${fpsSlider.value()}`);
  frameRate(fpsSlider.value());
}

function addElements() {
  if (depth != null) {
    depth.remove();
  }
  depth = createP();
  depth.position(40, height);
  depth.style('font-size', '32px');

  if (restart == null) {
    restart = createButton("Restart", "hello");
    restart.position(520, height + 40);
    restart.mousePressed(handleMouse);
  }
  
  if (xslider == null) {
    xslider = createSlider(2, 16, 5, 1);
    xslider.position(300, height + 40);
  }
  if (yslider == null) {
    yslider = createSlider(2, 16, 5, 1);
    yslider.position(300, height + 80);
  }
  if (xtext == null) {
    xtext = createP(xslider.value());
    xtext.position(240, height + 30);
  }
  if (ytext == null) {
    ytext = createP(yslider.value());
    ytext.position(240, height + 70);
  }
  if (fpsSlider == null) {
    fpsSlider = createSlider(1, 60, 60, 1);
    fpsSlider.position(520, height + 80);
  }
  if (fps == null) {
    fps = createP(fpsSlider.value());
    fps.position(460, height + 70);
  }
  
}

function handleMouse() {
  if (mouseButton == LEFT) {
    setup();
  }
}