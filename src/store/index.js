import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
import produce from "immer";


// action types
export const CHANGE_BOARD = "CHANGE_BOARD";
export const CHANGE_VALID_MOVES = "CHANGE_VALID_MOVES"
export const CHANGE_VALID_MOVES_BISHOP = "CHANGE_VALID_MOVES_BISHOP"
export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";


// action creator
export const boardHasChanged = (newBoard) => {
  return {
    type: CHANGE_BOARD,
    payload: newBoard
  }
}

export const setCurrentPlayer = (player) => ({
  type: SET_CURRENT_PLAYER,
  payload: player,
});

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
        case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = legacy_createStore(boardReducer, enhancer())

export default store