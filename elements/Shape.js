class Shape{
    constructor(shapeID, startingPos){
        this.shapeID = shapeID;
        this.currentPos = startingPos;
        this.blocks = [];
        for(let pos of shapeID.blockPositions){
            console.log(startingPos + pos);
            this.blocks.push(new Block(createVector(startingPos.x + pos.x, startingPos.y + pos.y), shapeID.color));
            gameBoard.board[startingPos.y + pos.y][startingPos.x + pos.x] = 1;
        }
    }

    draw(){
        for(let block of this.blocks){
            block.draw();
        }
    }

    moveLeft(){
        for(let block of this.blocks){
            block.moveLeft();
        }
        this.currentPos.x -= 1;
        console.log("Current positions moved to", this.currentPos.x, this.currentPos.y);
    }

    moveRight(){
        for(let block of this.blocks){
            block.moveRight();
        }
        this.currentPos.x += 1;
        console.log("Current positions moved to", this.currentPos.x, this.currentPos.y);
    }

    moveDown() {
        // Сохранение текущих позиций блоков перед перемещением вниз
        const oldPositions = this.blocks.map(block => block.currentGridPosition.copy());

        // Перемещение вниз
        for (let block of this.blocks) {
            block.moveDown();
        }

        // Проверка допустимости новых позиций после перемещения вниз
        if ((!this.checkValidPositions(this.blocks.map(block => block.currentGridPosition)))) {
            // Если позиции недопустимы, отменяем перемещение вниз
            for (let i = 0; i < this.blocks.length; i++) {
                this.blocks[i].currentGridPosition = oldPositions[i];
            }
        }else {
            this.currentPos.y += 1;
            console.log("Current positions moved to", this.currentPos.x, this.currentPos.y);
        }
    }

    rotateShape(clockwise = true) {
        // Сохраняем текущие позиции блоков перед вращением
        let oldPositions = this.blocks.map(block => block.currentGridPosition.copy());

        // Определяем угол вращения
        const angle = clockwise ? -Math.PI / 2 : Math.PI / 2;


        // Создаем новую точку вращения
        let rotationPoint = createVector(
            this.currentPos.x + this.shapeID.rotationPoint.x,
            this.currentPos.y + this.shapeID.rotationPoint.y
        );

        // Временный массив для хранения новых позиций блоков
        let newPositions = [];

        // Применяем матрицу вращения к каждому блоку
        for (let block of this.blocks) {
            // Рассчитываем относительные координаты блоков
            let relX = block.currentGridPosition.x - rotationPoint.x;
            let relY = block.currentGridPosition.y - rotationPoint.y;

            // Применяем матрицу вращения
            let rotatedX = relX * Math.cos(angle) - relY * Math.sin(angle);
            let rotatedY = relY * Math.cos(angle) + relX * Math.sin(angle);

            // Переводим относительные координаты обратно в абсолютные
            let newX = Math.round(rotationPoint.x + rotatedX);
            let newY = Math.round(rotationPoint.y + rotatedY);

            // Добавляем новые позиции в массив
            newPositions.push(createVector(newX, newY));
        }

        // Проверка допустимости новых позиций блоков
        const isValidRotation = this.checkValidPositions(newPositions);


        if (isValidRotation) {
            // Если позиции допустимы, обновляем текущие позиции блоков
            for (let i = 0; i < this.blocks.length; i++) {
                this.blocks[i].currentGridPosition = newPositions[i];
            }
        } else {
            // Если позиции недопустимы, отменяем вращение и восстанавливаем старые позиции
            for (let i = 0; i < this.blocks.length; i++) {
                this.blocks[i].currentGridPosition = oldPositions[i];
            }
        }
    }

    checkValidPositions(newPositions) {
        for (let pos of newPositions) {
            // Проверка границ игрового поля
            if (pos.x < 0 || pos.x >= WIDTH/BLOCK_SIZE || pos.y < 0 || pos.y >= HEIGHT/BLOCK_SIZE) {
                return false;
            }
            // if(gameBoard.board[pos.y][pos.x] == 1){
            //     return false;
            // }
            // Проверка столкновений с другими блоками
            // (Зависит от вашей реализации хранения игрового поля)
            // Например, проверка может выглядеть так:
            // if (gameBoard[pos.y][pos.x] !== 0) {
            //     return false;
            // }

            // Ваша реализация проверки столкновений может отличаться
        }

        return true;
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

