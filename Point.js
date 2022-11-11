const up = {x: 0, y: -1};
const down = {x: 0, y: 1};
const left = {x: -1, y: 0};
const right = {x: 1, y: 0};

class Point {
  constructor(i, j, previous, depth) {
    this.i = i;
    this.j = j;
    this.parent = previous;
    this.child = null;
    this.directions = [up, down, left, right];
    this.depth = depth;
  }
    
  show(size) {
    fill("black");
    var x = (this.i+0.5) * size;
    var y = (this.j+0.5) * size;
    ellipse(x, y, size / 4);
    if (this.parent != null) {
      var dx = (this.parent.x+0.5)*size;
      var dy = (this.parent.y+0.5)*size;
      line(x, y, dx, dy);
    }
    fill("white");
    textSize(size / 6);
    textAlign(CENTER);
    text(this.depth.toString(), x, y + size/32);
  }

  get x() {
    return this.i;
  }

  get y() {
    return this.j;
  }

  get prev() {
    return this.parent;
  }

  set next(child) {
    this.child = child;
  }

  get getDepth() {
    return this.depth;
  }

  getDirection() {
    if (this.directions.length == 0) {
      return null;
    }
    return this.directions.splice(floor(random(this.directions.length)), 1)[0];
  }
}