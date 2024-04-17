class Shape{
    constructor(shapeID, startingPos){
        this.shapeID = shapeID;
        this.currentPos = startingPos;
        this.blocks = [];
        for(let pos of shapeID.blockPositions){
            console.log(startingPos + pos);
            this.blocks.push(new Block(createVector(startingPos.x + pos.x, startingPos.y + pos.y)));
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
}

let i_shape;
let j_shape;
let o_shape;
let s_shape;
let t_shape;

function setShapeIDs(){

    i_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(0,3)], rotationPoint : createVector(0, 1)
    }

    j_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(-1,2)], rotationPoint : createVector(0, 1)
    }

     o_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(1,0),
            createVector(1,1)], rotationPoint : createVector(0.5, 0.5)
    }

    s_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(1,-1),
            createVector(1,0)], rotationPoint : createVector(1, 0)
    }

    t_shape = {blockPositions : [createVector(0,-1), createVector(0,0), createVector(0,1),
            createVector(1,0)], rotationPoint : createVector(0, 0)
    }

}

