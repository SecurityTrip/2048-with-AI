var testShape;

// let i_shape;
// let j_shape;
// let o_shape;
// let s_shape;
// let t_shape;

function setup(){
    window.canvas = createCanvas(600, 600);
    setShapeIDs();
    testShape = new Shape(t_shape,createVector(10,10))
}

function draw(){
    background(155);
    // for (let x = 0; x <= 600; x+=20) {
    //     line(x,0, x, 600)
    // }
    // for (let y = 0; y <= 600; y+=20) {
    //     line(0,y,600,y)
    // }
    for (let x = 0; x < 600; x+=20) {
        for (let y = 0; y < 600; y+=20) {
            line(x, y, x, y);
        }
    }

    testShape.draw();
}