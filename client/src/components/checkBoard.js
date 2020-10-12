const checkBoard = (board) => {

    /* Check Row-Win */
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            if (board[i][j] !== 0 &&
                board[i][j] === board[i+1][j] &&
                board[i][j] === board[i+2][j] &&
                board[i][j] === board[i+3][j]) return board[i][j];
        }
    }

    /* Check Column-win */
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== 0 &&
                board[i][j] === board[i][j+1] &&
                board[i][j] === board[i][j+2] &&
                board[i][j] === board[i][j+3]) return board[i][j];
        }
    }

    /* Check Downwards Diagonal-win */
    for (let i = 0; i < 4; i++) {
        for (let j = 5; j >= 0; j--) {
            if (board[i][j] !== 0 &&
                board[i][j] === board[i+1][j-1] &&
                board[i][j] === board[i+2][j-2] &&
                board[i][j] === board[i+3][j-3]) return board[i][j];
        }
    }

    /* Check Upwards Diagonal-win */
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            if (board[i][j] !== 0 &&
                board[i][j] === board[i+1][j+1] &&
                board[i][j] === board[i+2][j+2] &&
                board[i][j] === board[i+3][j+3]) return board[i][j];
        }
    }

    /* Check Draw */
    if (board.every(column => column.every(elem => elem !== 0))) return 'tie'
}

export default checkBoard;