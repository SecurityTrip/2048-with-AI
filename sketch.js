let testShape;
const HEIGHT = 600;
const WIDTH = 600;

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
    testShape = new Shape(l_shape, createVector(15, 15));
}

function draw(){
    background(155);
    for (let x = 0; x < WIDTH; x+=20) {
        for (let y = 0; y < HEIGHT; y+=20) {
            line(x, y, x, y);
        }
    }

    testShape.draw();
}