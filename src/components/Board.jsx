import React from "react";
import "./board.css";
import { useDispatch, useSelector } from "react-redux";
import { validMovesChanged } from "../store";
import { getPawnMoves } from "../chess-rules";
import { getBishopMove } from "../chess-rules";
import { boardHasChanged } from "../store";
import { setCurrentPlayer } from "../store";

const Board = () => {
  const { pieces, currentPlayer, selectedPiece, validMoves } = useSelector(
    (state) => state
  );

  Object.freeze(pieces);
  const dispatch = useDispatch();
  const piecePositionHandler = (i, j, square) => {
    const newRow = i;
    const newCol = j;

    const handleFirstClick = () => {
      if (square?.id && square.color === currentPlayer) {
        const pieceData = {
          row: i,
          col: j,
          piece: square,
        };
        let validMovments = [];
        if (square.id[0] === "p") {
          validMovments = getPawnMoves(pieceData, pieces);
        }
        if (square.id[0] === "b") {
          validMovments = getBishopMove(pieceData, pieces);
        }
        dispatch(validMovesChanged(validMovments, pieceData));
      }
    };

    const handleSecondClick = () => {
      if (validMoves.some((move) => move[0] === newRow && move[1] === newCol)) {
        const oldLocation = pieces[selectedPiece.row][selectedPiece.col];
        pieces[selectedPiece.row][selectedPiece.col] = null;
        pieces[newRow][newCol] = oldLocation;
        let changeTurn = "";
        if (currentPlayer === "white") {
          changeTurn = "black";
        } else {
          changeTurn = "white";
        }
        dispatch(boardHasChanged(pieces));
        dispatch(setCurrentPlayer(changeTurn));
        changeTurn = "";
      } else {
        handleFirstClick();
      }
    };
    console.log("validMoves: ", validMoves);
    console.log("selectedPiece: ", selectedPiece);
    console.log("pieces: ", pieces);
    /*   const handleSecondClick = () => {
        if (validMoves.some((move) => move[0] === newRow && move[1] === newCol)) {
          console.log("Selected Piece", selectedPiece);
          let oldLocation = pieces[selectedPiece.row][selectedPiece.col];
          console.log("oldLocation: ", oldLocation);
          pieces[selectedPiece.row][selectedPiece.col] = null;
          pieces[newRow][newCol] = oldLocation;
          dispatch(boardHasChanged(pieces));

        }
        handleFirstClick();
      }; */

    if (!selectedPiece) {
      handleFirstClick();
    } else {
      handleSecondClick();
    }
  };

  return (
    <div className="main">
      {pieces.map((row, i) => (
        <div className="row" key={i}>
          {row.map((square, j) => (
            <div
              className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
              key={`${i}-${j}`}
              onClick={() => piecePositionHandler(i, j, square)}
            >
              <div className={`${(validMoves)? 'ck':''}`}>
                {square?.Image && (
                  <img src={square.Image} alt={square.id} id={`${i}-${j}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
