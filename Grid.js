class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.max = x * y - 1;
    this.grid = [];
    this.point = null;
    this.initGrid();
  }
  
  initGrid() {
    for (var i = 0; i < this.x; i++) {
      this.grid.push([]);
      for (var j = 0; j < this.y; j++) {
        this.grid[i].push(null);
      }
    }
    var x = floor(this.x / 2);
    var y = floor(this.y / 2);
    this.count = 0;
    this.point = new Point(x, y, null, this.count);
    this.grid[x][y] = this.point;
  }

  next() {
    var dir, x, y;
    do {
      dir = this.point.getDirection();
      if (dir == null) {
        this.grid[this.point.x][this.point.y] = null;
        this.point = this.point.prev;
        this.point.next == null;
        this.count -= 1;
        this.next();
        return;
      }
      x = this.point.x + dir.x;
      y = this.point.y + dir.y;
    } while (!this.inBounds(x,y) || this.grid[x][y] != null || !this.checkVisibility(x, y));
    this.count += 1;
    this.point = new Point(x, y, this.point, this.count);
    this.grid[x][y] = this.point;
  }

  inBounds(x, y) {
    return x >= 0 && x < this.x && y >= 0 && y < this.y;
  }

  // BFS the graph from this vertex and verify it can reach all other non visited vertex
  checkVisibility(x ,y) {
    var depth = this.bfs(x,y) + this.point.depth;
    for (var i = 0; i < this.x; i++) {
      for (var j = 0; j < this.y; j++) {
        if (this.grid[i][j] == true) {
          this.grid[i][j] = null;
        }
      }
    }
    console.log(depth == this.max);
    return depth == this.max;
  }

  bfs(x, y) {
    var directions = [up, down, left, right];
    var found = 0;
    if (!this.inBounds(x,y) || this.grid[x][y] instanceof Point || this.grid[x][y] == true) {
      return 0;
    } else {
      this.grid[x][y] = true;
      found++;
    }
    for (var direction of directions) {
      found += this.bfs(x + direction.x, y + direction.y);
    }
    return found;
  }

  show() {
    background("white");
    var size = min(width / this.x, height / this.y)
    for (var i = 0; i < this.x; i++) {
      for (var j = 0; j < this.y; j++) {
        noFill();
        stroke("black");
        square(i*size, j*size, size);
        if (this.grid[i][j] != null) {
          this.grid[i][j].show(size);
        }
      }
    }

    if (this.point.getDepth == this.max) {
      depth.html(`Depth: ${this.point.getDepth}/${this.max}`);
      return;
    }
    this.next();
    depth.html(`Depth: ${this.point.getDepth}/${this.max}`);
  }
}