let grid = new Grid(80, 80, 10);
let snake = new Snake();
let mouse = new Mouse();
let framerate = 15;

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        snake.moveRight();
    } else if (keyCode === DOWN_ARROW) {
          snake.moveDown();
    } else if (keyCode === UP_ARROW) {
        snake.moveUp();
    }
}
function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var temp = obj.constructor(); // give temp the original obj's constructor
    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }
    return temp;
}

function setup() {
    grid.init();
    frameRate(15);
}

function draw() {
    keyPressed();
    
    snake.update();

    if(snake.getCoordinates()[0].x == mouse.getPosition().x && snake.getCoordinates()[0].y == mouse.getPosition().y) {
      snake.eat();
      mouse.update();
      frameRate(++framerate);
    }

    clear();
    background('#e7e7e7');
    snake.draw();
    mouse.draw();
}