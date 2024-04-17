class Shape{
    constructor(shapeID, startingPos){
        this.shapeID = shapeID;
        this.currentPos = startingPos;
        this.blocks = [];
        for(let pos of shapeID.blockPositions){
            console.log(startingPos + pos);
            this.blocks.push(new Block(createVector(startingPos.x + pos.x, startingPos.y + pos.y), shapeID.color));
        }
    }

    draw(){
        for(let block of this.blocks){
            block.draw();
        }
    }

    moveDown(){
        for(let block of this.blocks){
            block.moveDown();
        }
    }

    moveLeft(){
        for(let block of this.blocks){
            block.moveLeft();
        }
    }

    moveRight(){
        for(let block of this.blocks){
            block.moveRight();
        }
    }

    //TODO Make correct rotations
    rotateShape() {
        let rotationPoint = this.shapeID.rotationPoint;
        const angle = Math.PI/2;

        for (let i = 0; i < this.blocks.length; i++) {

            let x_rotated = ((this.blocks[i].currentGridPosition.x - rotationPoint.x) * Math.cos(angle)) - ((rotationPoint.y - this.blocks[i].currentGridPosition.y) * Math.sin(angle))  + rotationPoint.x;
            let y_rotated = rotationPoint.y - ((rotationPoint.y - this.blocks[i].currentGridPosition.y) * Math.cos(angle)) + ((this.blocks[i].currentGridPosition.x - rotationPoint.x) * Math.sin(angle))

            this.blocks[i].currentGridPosition = createVector(int(x_rotated), int(y_rotated));

            // Вывод новой позиции блока
            console.log(`Block at (${this.blocks[i].currentGridPosition.x}, ${this.blocks[i].currentGridPosition.y})`);
        }
    }
}

let i_shape;
let j_shape;
let l_shape;
let o_shape;
let s_shape;
let t_shape;
let z_shape;


function setShapeIDs(){

    i_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(0,3)], rotationPoint : createVector(0, 1), color : "#0b7c0f"
    }

    j_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(-1,2)], rotationPoint : createVector(0, 1), color : "#f6a004"
    }

    l_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(1,2)], rotationPoint : createVector(0, 1), color : "#a12c2b"
    }

     o_shape = {blockPositions : [createVector(0,0), createVector(1,0), createVector(1,1),
            createVector(0,1)], rotationPoint : createVector(0.5, 0.5), color : "#f80004"
    }

    s_shape = {blockPositions : [createVector(0,0), createVector(1,0), createVector(1,-1),
            createVector(2,-1)], rotationPoint : createVector(1, 0), color : "#0ef1f3"
    }

    t_shape = {blockPositions : [createVector(-1,0), createVector(0,0), createVector(1,0),
            createVector(0,1)], rotationPoint : createVector(0, 0), color : "#0406c8"
    }

    z_shape = {blockPositions : [createVector(-1,0), createVector(0,0), createVector(0,1),
            createVector(1,1)], rotationPoint : createVector(0, 0), color : "#0ef1f3"
    }
}

