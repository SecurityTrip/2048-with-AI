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


    rotateShape() {
        // Точка вращения — текущая позиция фигуры
        let rotationPoint = this.currentPos;

        // Повернуть каждый блок фигуры
        for (let i = 0; i < this.blocks.length; i++) {
            // Текущая позиция блока
            let block = this.blocks[i];

            // Вычисляем относительные координаты блока относительно точки вращения
            let relativeX = block.currentGridPosition.x - rotationPoint.x;
            let relativeY = block.currentGridPosition.y - rotationPoint.y;

            // Применяем матрицу поворота
            let newRelativeX = -relativeY; // 0 * relativeX - 1 * relativeY
            let newRelativeY = relativeX;  // 1 * relativeX + 0 * relativeY

            // Обновляем текущую позицию блока, добавляя новую относительную позицию к точке вращения
            block.currentGridPosition.x = rotationPoint.x + newRelativeX;
            block.currentGridPosition.y = rotationPoint.y + newRelativeY;
        }
    }
}

let i_shape;
let j_shape;
let o_shape;
let z_shape;
let t_shape;

function setShapeIDs(){

    i_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(0,3)], rotationPoint : createVector(0, 1), color : "#0b7c0f"
    }

    j_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(0,2),
            createVector(-1,2)], rotationPoint : createVector(0, 1), color : "#f6a004"
    }

     o_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(1,0),
            createVector(1,1)], rotationPoint : createVector(0.5, 0.5), color : "#f80004"
    }

    z_shape = {blockPositions : [createVector(0,0), createVector(0,1), createVector(1,-1),
            createVector(1,0)], rotationPoint : createVector(1, 0), color : "#0ef1f3"
    }

    t_shape = {blockPositions : [createVector(0,-1), createVector(0,0), createVector(0,1),
            createVector(1,0)], rotationPoint : createVector(0, 0), color : "#0406c8"
    }

}

