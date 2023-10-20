import { useState } from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

let count = 0;

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState();

  const squareHandler = (index) => {
    const newSquares = [...squares];

    if (newSquares[index] || winner) {
      return;
    }

    if (isX) {
      newSquares[index] = "X";
      setIsX(false);
    } else {
      newSquares[index] = "O";
      setIsX(true);
    }
    setWinner(calculateWinner(newSquares));
    setSquares(newSquares);
    count++;
  };

  return (
    <div className="board">
      <h1>Tic Tac Toe</h1>
      {!winner &&
        count < 9 &&
        (isX ? <h2>It's X turn</h2> : <h2>It's O turn</h2>)}
      {winner && <h1>Winner is {winner}</h1>}
      {count === 9 && !winner && <h2>It's a tie!</h2>}

      <div className="board-row">
        <Square index={0} onClick={squareHandler} value={squares[0]} />
        <Square index={1} onClick={squareHandler} value={squares[1]} />
        <Square index={2} onClick={squareHandler} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square index={3} onClick={squareHandler} value={squares[3]} />
        <Square index={4} onClick={squareHandler} value={squares[4]} />
        <Square index={5} onClick={squareHandler} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square index={6} onClick={squareHandler} value={squares[6]} />
        <Square index={7} onClick={squareHandler} value={squares[7]} />
        <Square index={8} onClick={squareHandler} value={squares[8]} />
      </div>
    </div>
  );
};

export default Board;
