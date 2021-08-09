class TicTacToe {
    constructor() {
        this.CurrentPlayerSymbol = 'x';
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.CurrentPlayerSymbol == 'x' ? 1 : -1;
            let res = false;
            let sumVertical = [0, 0, 0], sumHorizontal = [0, 0, 0], sumDiagonalDown = 0, sumDiagonalUp = 0;
            for(let i = 0; i < this.matrix.length; i++) {
                for(let j = 0; j < this.matrix.length; j++) {
                    sumHorizontal[i] += this.matrix[i][j];
                    sumVertical[j] += this.matrix[i][j];
                    if (i == j) {
                        sumDiagonalDown += this.matrix[i][j];
                    } 
                    if (i == this.matrix.length - 1 - j) {
                        sumDiagonalUp += this.matrix[i][j];
                    }
                }
            }
            if (sumVertical.some(x => Math.abs(x) == 3)
                || sumHorizontal.some(x => Math.abs(x) == 3)
                || Math.abs(sumDiagonalDown) == 3
                || Math.abs(sumDiagonalUp) == 3) {
                this.winner = this.CurrentPlayerSymbol;
            }
            this.CurrentPlayerSymbol = this.CurrentPlayerSymbol == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.winner != null || this.isDraw();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        let res = false;
        this.matrix.map(x => res = res || x.some(x => x == null));
        return !res;
    }

    isDraw() {
        return this.noMoreTurns() && this.winner == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] == 1 ? 'x' :
         this.matrix[rowIndex][colIndex] == -1 ? 'o' : null;
    }
}

module.exports = TicTacToe;
