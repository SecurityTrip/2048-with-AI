var BLOCK_SIZE = 20;

class Block {
    constructor(startingGridPosition) {
        this.startingGridPosition = startingGridPosition;
        this.currentGridPosition = startingGridPosition;
        this.color = color(255, 0, 0);
    }

    draw(){
        push();
        let pos = this.currentGridPosition;
        fill(this.color);
        stroke(0)
        strokeWeight(3);
        rect(pos.x * BLOCK_SIZE, pos.y*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        pop();
    }

    moveDown(){
        this.currentGridPosition.y += 1;
    }

    moveLeft(){
        this.currentGridPosition.x -= 1;
    }

    moveRight(){
        this.currentGridPosition.x += 1;
    }
}