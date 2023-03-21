import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
import produce from "immer";


// action types
export const CHANGE_BOARD = "CHANGE_BOARD";
export const CHANGE_VALID_MOVES = "CHANGE_VALID_MOVES"
export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
export const HISTORY = "HISTORY"

// action creator
export const boardHasChanged = (newBoard) => {
  return {
    type: CHANGE_BOARD,
    payload: newBoard
  }
}

export const setCurrentPlayer = (currentPlayer) => ({
  type: SET_CURRENT_PLAYER,
  payload: currentPlayer,
});

export const validMovesChanged = (validMovments, selectedPiece) => {
  return {
    type: CHANGE_VALID_MOVES,
    payload: {
      validMovments,
      selectedPiece
    }
  }
}

export const historyChanged = () => {
  return {
    type:HISTORY,
    payload:{
      
    }
  }
}




const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOARD:
      return produce(state, (draft) => {
        draft.pieces = action.payload;
      })
    case CHANGE_VALID_MOVES:
      console.log("Valid moves", action.payload.validMovments);
      return produce(state, (draft) => {
        draft.validMoves = action.payload.validMovments
        draft.selectedPiece = action.payload.selectedPiece
      })
    case SET_CURRENT_PLAYER:
      console.log('action.payload: ', action.payload);
      return produce(state, (draft) => {
        draft.currentPlayer = action.payload
        draft.selectedPiece = null
      })
    default:
      return state;
  }
};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = legacy_createStore(boardReducer, enhancer())

export default store