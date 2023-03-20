import React, { useState } from "react";
import "./board.css";
import { statePieces } from "../pieces/StatePieces";
import { useDispatch } from "react-redux";
import { initialState } from "../pieces/StatePieces";
import { movePawn } from "../store";

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

      const validMoves = [];
      const direction = square.color === "white" ? -1 : 1; // pawn moves in opposite directions for black and white
      const startingRow = square.color === "white" ? 6 : 1; // row where the pawn starts
      const currentRow = i;
      const currentCol = j;
      // check if the pawn can move forward one square
      const oneSquareAhead = statePieces[currentRow + direction][currentCol];
      console.log('oneSquareAhead: ', oneSquareAhead);
      if (!oneSquareAhead) {
        validMoves.push([currentRow + direction, currentCol]);
      }
      // check if the pawn can move forward two squares from starting position
      if (currentRow === startingRow) {
        const twoSquaresAhead = statePieces[currentRow + 2 * direction][currentCol];
        console.log('twoSquaresAhead: ', twoSquaresAhead);
        if (!twoSquaresAhead && !oneSquareAhead) {
          validMoves.push([currentRow + 2 * direction, currentCol]);
        }
      }
      // check if the pawn can capture diagonally
      const leftDiagonal = statePieces[currentRow + direction][currentCol - 1];
      const rightDiagonal = statePieces[currentRow + direction][currentCol + 1];
      if (leftDiagonal && leftDiagonal.color !== square.color) {
        validMoves.push([currentRow + direction, currentCol - 1]);
      }
      if (rightDiagonal && rightDiagonal.color !== square.color) {
        validMoves.push([currentRow + direction, currentCol + 1]);
      }

      console.log("Valid moves for pawn:", validMoves);

   

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
              {`${i}-${j}`}{square.Image && (
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
