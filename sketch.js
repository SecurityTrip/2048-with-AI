let currentShape;
let testShape2;
let gameBoard;

const HEIGHT = 640;
const WIDTH = 400;

// let i_shape;
// let j_shape;
// let l_shape;
// let o_shape;
// let s_shape;
// let t_shape;
// let z_shape;

//TODO Make falling and collision

function setup() {
    window.canvas = createCanvas(WIDTH, HEIGHT);
    setShapeIDs();
    gameBoard = new GameBoard();
    gameBoard.print();
    testShape2 = new Shape(l_shape, createVector(4, 4))
    currentShape = new Shape(z_shape, createVector(1, 1));

    // setInterval(() => {
    //     moveCurrentShapeDown();
    // }, 100);
}

function moveCurrentShapeDown() {
    // Вызовите функцию moveDown() для текущей фигуры
    if (currentShape) {
        currentShape.moveDown();
    }
}

function keyPressed() {
    clear();
    // Управление вращением
    if (key === 'ArrowUp') {
        if (currentShape) {
            currentShape.rotateShape();
        }
    }

    // Управление перемещением влево
    if (key === 'ArrowLeft') {
        if (currentShape) {
            currentShape.moveLeft();
        }
    }

    // Управление перемещением вправо
    if (key === 'ArrowRight') {
        if (currentShape) {
            currentShape.moveRight();
        }
    }

    // Управление ускорением падения
    if (key === 'ArrowDown') {
        if (currentShape) {
            moveCurrentShapeDown();
        }
    }
}

function draw(){
    background(155);
    for (let x = 0; x < WIDTH; x+=20) {
        for (let y = 0; y < HEIGHT; y+=20) {
            line(x, y, x, y);
        }
    }

    currentShape.draw();
    testShape2.draw();
}