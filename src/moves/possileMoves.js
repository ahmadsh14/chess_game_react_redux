import kingBlack from "../img/king-black.svg";
import bishopBlack from "../img/bishop-black.svg";
import knightBlack from "../img/knight-black.svg";
import pawnBlack from "../img/pawn-black.svg";
import queenBlack from "../img/queen-black.svg";
import rookBlack from "../img/rook-black.svg";

import kingWhite from "../img/king-white.svg";
import knightWhite from "../img/knight-white.svg";
import bishopWhite from "../img/bishop-white.svg";
import pawnWhite from "../img/pawn-white.svg";
import queenWhite from "../img/queen-white.svg";
import rookWhite from "../img/rook-white.svg";

export const pieces = {
  black: {
    king: { id: "kingB", Image: kingBlack },
    bishop1: { id: "bishopB1", Image: bishopBlack, color: 'black' },
    bishop2: { id: "bishopB2", Image: bishopBlack, color: 'black' },
    pawn1: { id: "pawnB1", Image: pawnBlack, color: 'black' },
    pawn2: { id: "pawnB2", Image: pawnBlack, color: 'black' },
    pawn3: { id: "pawnB3", Image: pawnBlack, color: 'black' },
    pawn4: { id: "pawnB4", Image: pawnBlack, color: 'black' },
    pawn5: { id: "pawnB5", Image: pawnBlack, color: 'black' },
    pawn6: { id: "pawnB6", Image: pawnBlack, color: 'black' },
    pawn7: { id: "pawnB7", Image: pawnBlack, color: 'black' },
    pawn8: { id: "pawnB8", Image: pawnBlack, color: 'black' },
    queen: { id: "queenB", Image: queenBlack },
    knight: { id: "knightB", Image: knightBlack },
    rook: { id: "rookB", Image: rookBlack },
  },
  white: {
    king: { id: "kingW", Image: kingWhite },
    knight: { id: "knightW", Image: knightWhite },
    bishop1: { id: "bishopW1", Image: bishopWhite, color: 'white' },
    bishop2: { id: "bishopW2", Image: bishopWhite, color: 'white' },
    pawn1: { id: "pawnW1", Image: pawnWhite, color: 'white', sol: 'p' },
    pawn2: { id: "pawnW2", Image: pawnWhite, color: 'white' },
    pawn3: { id: "pawnW3", Image: pawnWhite, color: 'white' },
    pawn4: { id: "pawnW4", Image: pawnWhite, color: 'white' },
    pawn5: { id: "pawnW5", Image: pawnWhite, color: 'white' },
    pawn6: { id: "pawnW6", Image: pawnWhite, color: 'white' },
    pawn7: { id: "pawnW7", Image: pawnWhite, color: 'white' },
    pawn8: { id: "pawnW8", Image: pawnWhite, color: 'white' },
    queen: { id: "queenW", Image: queenWhite },
    rook: { id: "rookW", Image: rookWhite },
  },
};
//////////
import { pieces } from "./AllPieces";

export const statePieces = [
  [
    pieces.black.rook,
    pieces.black.knight,
    pieces.black.bishop1,
    pieces.black.queen,
    pieces.black.king,
    pieces.black.bishop2,
    pieces.black.knight,
    pieces.black.rook,
  ],
  [
    pieces.black.pawn1,
    pieces.black.pawn2,
    pieces.black.pawn3,
    pieces.black.pawn4,
    pieces.black.pawn5,
    pieces.black.pawn6,
    pieces.black.pawn7,
    pieces.black.pawn8,
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.black.pawn7,
    ""
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.white.pawn2
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.white.pawn1,
    ""
  ],
  [
    pieces.white.pawn1,
    pieces.white.pawn2,
    pieces.white.pawn3,
    pieces.white.pawn4,
    '',
    pieces.white.pawn6,
    pieces.white.pawn7,
    pieces.white.pawn8,
  ],
  [
    pieces.white.rook,
    pieces.white.knight,
    pieces.white.bishop1,
    pieces.white.queen,
    pieces.white.king,
    pieces.white.bishop2,
    pieces.white.knight,
    pieces.white.rook,
  ],
];

export const initialState = {
  pieces: statePieces,
  currentPlayer: 'white',
  selectedPiece: null,
  validMoves: []
};
///////////
export const getValidMoves = (pieceData, pieces) => {
  const validMoves = []
  const direction = pieceData.piece.color === "white" ? -1 : 1;
  const startingRow = pieceData.piece.color === "white" ? 6 : 1;
  const currentRow = pieceData.row;
  const currentCol = pieceData.col;

  const oneSquareAhead = pieces[currentRow + direction][currentCol];
  if (!oneSquareAhead) {
      validMoves.push([currentRow + direction, currentCol]);
  }

  if (currentRow === startingRow) {
      const twoSquaresAhead =
          pieces[currentRow + 2 * direction][currentCol];
      if (!twoSquaresAhead && !oneSquareAhead) {
          validMoves.push([currentRow + 2 * direction, currentCol]);
      }
  }

  const leftDiagonal = pieces[currentRow + direction][currentCol - 1];
  const rightDiagonal = pieces[currentRow + direction][currentCol + 1];
  if (leftDiagonal && leftDiagonal.color !== pieceData.piece.color) {
      validMoves.push([currentRow + direction, currentCol - 1]);
  }
  if (rightDiagonal && rightDiagonal.color !== pieceData.piece.color) {
      validMoves.push([currentRow + direction, currentCol + 1]);
  }
  return validMoves
}

export const getBishopMoves = (pieceData, pieces) => {
  const validMoves = [];
  const currentRow = pieceData.row;
  const currentCol = pieceData.col;
  // check diagonals
  let i, j;
  // top left
  for (i = currentRow - 1, j = currentCol - 1; i >= 0 && j >= 0; i--, j--) {
      if (pieces[i][j]) {
          if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
              validMoves.push([i, j]);
          }
          break;
      }
      validMoves.push([i, j]);
  }
  // top right
  for (i = currentRow - 1, j = currentCol + 1; i >= 0 && j < 8; i--, j++) {
      if (pieces[i][j]) {
          if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
              validMoves.push([i, j]);
          }
          break;
      }
      validMoves.push([i, j]);
  }
  // bottom left
  for (i = currentRow + 1, j = currentCol - 1; i < 8 && j >= 0; i++, j--) {
      if (pieces[i][j]) {
          if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
              validMoves.push([i, j]);
          }
          break;
      }
      validMoves.push([i, j]);
  }
  // bottom right
  for (i = currentRow + 1, j = currentCol + 1; i < 8 && j < 8; i++, j++) {
      if (pieces[i][j]) {
          if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
              validMoves.push([i, j]);
          }
          break;
      }
      validMoves.push([i, j]);
  }

  return validMoves;
}
////
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
      }
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
              className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
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
////////
import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
import produce from "immer";


// action types
export const CHANGE_BOARD = "CHANGE_BOARD";
export const CHANGE_VALID_MOVES = "CHANGE_VALID_MOVES"
export const CHANGE_VALID_MOVES_BISHOP = "CHANGE_VALID_MOVES_BISHOP"


// action creator
export const boardHasChanged = (newBoard) => {
  return {
    type: CHANGE_BOARD,
    payload: newBoard
  }
}

export const validMovesChanged = (validMoves, selectedPiece) => {
  return {
    type: CHANGE_VALID_MOVES,
    payload: {
      validMoves,
      selectedPiece
    }
  }
}

export const validMovesChangedBishop = (validMoves, selectedPiece) => {
  return {
    type: CHANGE_VALID_MOVES_BISHOP,
    payload: {
      validMoves,
      selectedPiece
    }
  }
}



const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOARD:
      return produce(state, (draft) => {
        draft.newBoard = action.payload.newBoard;
        draft.selectedPiece = null;
        draft.validMoves = [];
      })
    case CHANGE_VALID_MOVES:
      console.log("Valid moves for pawn:", action.payload);
      return produce(state, (draft) => {
        draft.validMoves = action.payload.validMoves
        draft.selectedPiece = action.payload.selectedPiece
      })
      case CHANGE_VALID_MOVES_BISHOP:
        console.log("Valid moves for pawn:", action.payload);
        return produce(state, (draft) => {
          draft.validMoves = action.payload.validMoves
          draft.selectedPiece = action.payload.selectedPiece
        })
    default:
      return state;
  }
};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = legacy_createStore(boardReducer, enhancer())

export default store



