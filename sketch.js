var testBlock;

function setup(){
    window.canvas = createCanvas(600, 600);
    testBlock = new Block(createVector(10,10))
}

function draw(){
    background(100);
    for (let x = 0; x <= 600; x+=20) {
        for (let y = 0; y <= 600; y+=20) {
            line(x,y,x,y)
        }
    }
    testBlock.draw();
}