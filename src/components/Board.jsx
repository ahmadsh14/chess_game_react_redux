import React from "react";
import "./board.css";
import { useDispatch, useSelector } from "react-redux";
import { validMovesChanged } from "../store";
import { validMovesChangedBishop } from "../store";
import { getValidMoves } from "../chess-rules";
import { boardHasChanged } from "../store";
import { getBishopMoves } from "../chess-rules";

const Board = () => {
  const { pieces, currentPlayer, selectedPiece, validMoves } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const piecePositionHandler = (i, j, square) => {
    const newRow = i;
    const newCol = j;

    const handleFirstClick = () => {
      if (square.color === currentPlayer) {
        const pieceData = {
          row: i,
          col: j,
          piece: square,
        };
        const validMovments = getValidMoves(pieceData, pieces);
        const vaildMovesBishop = getBishopMoves(pieceData, pieces)
        dispatch(validMovesChanged(validMovments, pieceData));
        dispatch(validMovesChangedBishop(vaildMovesBishop, pieceData));

      }
    };

    const handleSecondClick = () => {
      if (validMoves.some((move) => move[0] === newRow && move[1] === newCol)) {
        const newPieces = JSON.parse(JSON.stringify(pieces)); // create a deep copy of the pieces array
        const oldLocation = newPieces[selectedPiece.row][selectedPiece.col];
        newPieces[selectedPiece.row][selectedPiece.col] = null;
        newPieces[newRow][newCol] = oldLocation;
        dispatch(boardHasChanged(newPieces));
/*         dispatch(setCurrentPlayer(currentPlayer === "white" ? "black" : "white"));
 */      }
      handleFirstClick();
    };
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

    // if (validMoves.some((move) => move[0] === newRow && move[1] === newCol)) {
    //   const oldLocation = statePieces[currentRow][currentCol];
    //   console.log("oldLocation: ", oldLocation);
    //   statePieces[currentRow][currentCol] = null;
    //   statePieces[newRow][newCol] = oldLocation;
    // }
    // const piecePositionHandler = (i, j, square) => {
    //   // ... existing code

    //   const validMoves = [];
    //   // ... existing code

    //     const oldLocation = statePieces[currentRow][currentCol];
    //     console.log("oldLocation: ", oldLocation);
    //     statePieces[currentRow][currentCol] = null;
    //     statePieces[newRow][newCol] = oldLocation;

    //     dispatch(
    //       movePawn({
    //         oldRow: currentRow,
    //         oldCol: currentCol,
    //         newRow: newRow,
    //         newCol: newCol,
    //       })
    //     );
    //   }
    // };

    // if (validMoves.some((move) => move[0] === i && move[1] === j)) {
    //   const oldLocation = statePieces[currentRow][currentCol];
    //   console.log("oldLocation: ", oldLocation);
    //   statePieces[newRow][newCol] = oldLocation;
    // }
  };

  return (
    <div className="main">
      {pieces.map((row, i) => (
        <div className="row" key={i}>
          {row.map((square, j) => (
            <div
              className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}` }
              key={`${i}-${j}`}
              onClick={() => piecePositionHandler(i, j, square)}
            >
              {`${i}-${j}`}
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
