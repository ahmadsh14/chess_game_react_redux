import { initialState } from "../pieces/StatePieces";
export const SELECT_PIECE = 'SELECT_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';

// action types
export const MOVE_PAWN = "MOVE_PAWN";

// action creator
export const movePawn = (pieceId, newRow, newCol) => {
  return {
    type: MOVE_PAWN,
    payload: {
      pieceId: pieceId,
      newRow: newRow,
      newCol: newCol
    }
  }
}

const pieceReducer = (state = initialState, action) => {
            return state;
}


