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
        // Точка вращения — из shapeID
        let rotationPoint = this.shapeID.rotationPoint;

        // Поворачиваем каждый блок фигуры
        for (let i = 0; i < this.blocks.length; i++) {
            // Получаем текущую позицию блока
            let block = this.blocks[i];

            // Вычисляем относительные координаты блока относительно точки вращения
            let relativeX = block.currentGridPosition.x - rotationPoint.x;
            let relativeY = block.currentGridPosition.y - rotationPoint.y;

            // Поворачиваем блок на 90 градусов (угол в радианах: π/2)
            let newRelativeX = -relativeY;
            let newRelativeY = relativeX;

            // Обновляем текущую позицию блока
            block.currentGridPosition.x = rotationPoint.x + newRelativeX;
            block.currentGridPosition.y = rotationPoint.y + newRelativeY;

            // Отладочное сообщение для проверки новых координат блоков
            console.log(`Block ${i}: x = ${block.currentGridPosition.x}, y = ${block.currentGridPosition.y}`);
        }
    }


}

let i_shape;
let j_shape;
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

