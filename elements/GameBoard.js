class GameBoard {
    constructor() {
        this.board = [];

        // Заполнение матрицы значениями
        for (let i = 0; i < HEIGHT/BLOCK_SIZE; i++) {
            this.board.push([]); // Добавляем новый пустой массив (строку) в матрицу
            for (let j = 0; j < WIDTH/BLOCK_SIZE; j++) {
                this.board[i].push(0); // Заполняем значение в каждую ячейку
            }
        }


    }

    print(){
        // Вывод заполненной матрицы в консоль
        console.log(this.board);
    }
}