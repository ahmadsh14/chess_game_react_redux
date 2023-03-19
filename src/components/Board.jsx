import React, { useState } from "react";
import "./board.css";
import { statePieces } from "../pieces/StatePieces";
import { useDispatch } from "react-redux";
import { initialState } from "../pieces/StatePieces";
const Board = () => {
  const dispatch = useDispatch();
  const [pieceD, setPieceData] = useState([]);
  console.log('pieceD: ', pieceD);

  const piecePositionHandler = (i, j, square) => {
    if (square.color === initialState.currentPlayer) {
      initialState.selectedPiece = square.id;
      const pieceData = {
        row: i,
        col: j,
        piece: square,
      };
      setPieceData(pieceData);
      console.log("pieceData: ", pieceData);
      console.log(initialState.currentPlayer);
    }
  };

  const validMoves =() => {
    if (pieceD.piece.sol === 'p'){
      console.log("hi")
    }
  }
  return (
    <div className="main">
      {statePieces.map((row, i) => (
        <div className="row" key={i}>
          {row.map((square, j) => (
            <div
              className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
              key={`${i}-${j}`}
              onClick={() => piecePositionHandler(i, j, square)}
            >
              {square.Image && (
                <img src={square.Image} alt={square.id} id={`${i}-${j}`} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
