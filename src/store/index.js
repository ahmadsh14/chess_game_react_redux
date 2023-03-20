import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
import produce from "immer";


// action types
export const CHANGE_BOARD = "CHANGE_BOARD";
export const CHANGE_VALID_MOVES = "CHANGE_VALID_MOVES"

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



const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOARD:
      return state;
    case CHANGE_VALID_MOVES:
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