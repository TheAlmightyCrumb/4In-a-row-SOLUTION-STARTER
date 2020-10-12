import React, {useState,useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import checkBoard from './checkBoard';

function Board() {
    const [board, setBoard] = useState([[]]); 
    const [winner, setWinner] = useState(false);
    const [turn, setTurn] = useState(0);

    function emptyBoard(){
        const gameBoard = [];
        for(let i = 0; i < 7; i++){
            gameBoard[i] = [];
            for(let j = 0; j < 6; j++) {
                gameBoard[i][j] = 0;
            }
        };
        setBoard(gameBoard);
        setWinner(false);
    }

    const insertTurn = (i) => {
        const currentIndex = board[i].findIndex(elem => elem === 0);
        if (currentIndex === -1) return;
        const newBoard = board.slice();
        turn % 2 === 0
        ?   newBoard[i][currentIndex] = 1
        :   newBoard[i][currentIndex] = 2;
        setTurn(turn + 1);
        setBoard(newBoard);
    }

    useEffect(() => {
        emptyBoard();
    }, []);

    useEffect(() => {
        const isWinner = board[0][0] !== undefined && checkBoard(board);
        isWinner && setWinner(isWinner);
    }, [board]);

  return (
    <>
        <div key='Board' className="Board">
            {
                board.map((column, i) => {
                    return (
                    <>
                        {i === 0 && <div key='divider0' className="divider" />} {/* the red column separating each column */}
                        <div 
                        key={`column${i}`} className="Column" id={`column${i}`}
                        onClick={() => {
                            if(winner) return;
                            insertTurn(i)
                        }}
                        >
                        {
                            column.map((square, i) => {
                                return (
                                    <div key={`square${i}`} className='Square' id={`square${i}`}>
                                        {
                                            square === 0
                                            ? null
                                            :
                                            <div key={`chip${i}`} className={square === 1 ? 'player1' : 'player2'}></div>
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div key={`divider${i+1}`} className="divider" /> {/* the red column separating each column */}
                    </>
                    )
                })
            }
        </div>

        <Modal key='Modal' open={winner? true : false} onClose={()=> {emptyBoard();}}>
            <div key='winModal' className ='winModal'>
                <h2 key='header1'>Game Finished!</h2>
                <h2 key='header2'>{winner === 'tie' ? 'A Tie !' : `Player ${winner} Wins!`}</h2>
            </div>
        </Modal>
    </>
  );
}


export default Board;
